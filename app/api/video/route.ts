import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import OpenAI from "openai";
import Replicate from "replicate";

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_KEY,
});

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const body = await req.json();
    const { prompt } = body;

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    if (!prompt) {
      return new NextResponse("Prompt is required", { status: 400 });
    }

    const input = {
      n_prompt: prompt
  };
  
  const response = await replicate.run("lucataco/animate-diff:beecf59c4aee8d81bf04f0381033dfa10dc16e845b4ae00d281e2fa377e48a9f", { input });
  console.log(response)
  //=> "https://replicate.delivery/pbxt/FeVB9R2sarznfUHHxQxIvoEt...

    return NextResponse.json(response);
  } catch (error) {
    console.log("[VIDEO_ERROR]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
