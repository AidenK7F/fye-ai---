"use client";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ArrowRight, Code, ImageIcon, MessageSquare, Music, PiSquare, VideoIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { styleText } from "util";

const tools = [
  {
    label: "Conversation",
    icon: MessageSquare,
    color: "text-violet-500",
    bgColor: "bg-violent-500/10",
    href: "/conversation"
  },
  {
    label: "Music Generation (DISABLED)",
    icon: Music,
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
    href: "/dashboard",
  },
  {
    label: "Image Generation",
    icon: ImageIcon,
    color: "text-pink-700",
    bgColor: "bg-pink-700/10",
    href: "/image"
  },
  {
    label: "Video Generation (DISABLED)",
    icon: VideoIcon,
    color: "text-orange-700",
    bgColor: "bg-orange-700/10",
    href: "/dashboard"
  },
  {
    label: "Code Generation",
    icon: Code,
    color: "text-green-700",
    bgColor: "bg-green-700/10",
    href: "/code"
  },
  {
    label: "Math Solver",
    icon: PiSquare,
    color: "text-blue-700",
    bgColor: "bg-blue-700/10",
    href: "/math",
  },
]

const DashboardPage = () => {
  const router = useRouter();
  return (
    <div>
    <div className="mb-8 space-y-4">
      <h2 className="text-2xl md:text-4xl font-bold text-center">
        Explore the power of AI
      </h2>
      <p className="text-muted-foreground font-light text-sm md:text-lg text-center">
        Chat with the smartest AI - Experience the power of AI
      </p>
    </div>
    <div className="px-4 md:px-20 lg:px-32 space-y-4">
      {tools.map((tool) => (
        <Card 
        onClick={() => router.push(tool.href)}
        key={tool.href}
        className="p-4 border-black/5 flex items-center justify-between transition hover:shadow-md cursor-pointer"
        >
          <div className="flex items-center gap-x-4">
            <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
              <tool.icon className={cn("w-8 h-8", tool.color)} />
            </div>
            <div className="font-semibold">
              {tool.label}
            </div>
          </div>
          <ArrowRight className="w-5 h-5" />
        </Card>
      ))}
    </div>
    </div>
  )
}

export default DashboardPage;
