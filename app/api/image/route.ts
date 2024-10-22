import { checkApiLimit, increaseApiLimit } from "@/lib/api-limit";
import { checkSubscription } from "@/lib/subscription";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const RATE_LIMIT = 5; // Max requests per minute
const rateLimitStore = new Map<string, { count: number, resetTime: number }>();

function isRateLimited(userId: string): boolean {
  const currentTime = Date.now();
  const userRateLimit = rateLimitStore.get(userId);

  if (!userRateLimit) {
    rateLimitStore.set(userId, { count: 1, resetTime: currentTime + 60000 });
    return false;
  }

  if (currentTime > userRateLimit.resetTime) {
    rateLimitStore.set(userId, { count: 1, resetTime: currentTime + 60000 });
    return false;
  }

  if (userRateLimit.count >= RATE_LIMIT) {
    return true;
  }

  userRateLimit.count += 1;
  return false;
}

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const body = await req.json();
    const { prompt, amount = 1, resolution = "512x512" } = body;

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    if (!openai.apiKey) {
      return new NextResponse("OpenAI API key not configured", { status: 500 });
    }

    if (!prompt) {
      return new NextResponse("Prompt is required", { status: 400 });
    }

    if (!amount) {
      return new NextResponse("Amount is required", { status: 400 });
    }

    if (!resolution) {
      return new NextResponse("Resolution is required", { status: 400 });
    }

    if (isRateLimited(userId)) {
      return new NextResponse("Rate limit exceeded. Please try again later.", { status: 429 });
    }

    const freeTrial = await checkApiLimit();
    const isPro = await checkSubscription();

    if (!freeTrial && !isPro) {
      return new NextResponse("Free trial has expired.", { status: 403 });
    }

    const response = await openai.images.generate({
      prompt: prompt,
      n: parseInt(amount, 10),
      size: "1024x1024",
      model: "dall-e-3",
    });

    if (!isPro) {
      await increaseApiLimit();
    }

    return NextResponse.json(response.data);
  } catch (error) {
    console.log("[IMAGE_ERROR]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
