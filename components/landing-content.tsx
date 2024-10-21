"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const testimonials = [
    {
        name: "Your Name Here",
        avatar: "X",
        title: "title",
        description: "Review"
    },
    {
        name: "Your Name Here",
        avatar: "X",
        title: "title",
        description: "Review"
    },
    {
        name: "Your Name Here",
        avatar: "X",
        title: "title",
        description: "Review"
    },
    {
        name: "Your Name Here",
        avatar: "X",
        title: "title",
        description: "Review"
    }
]

export const LandingContent = () => {
    return (
        <div className="px-10 mb-10 bg-[#252525]">
            <h2 className="text-center text-4xl text-white font-extrabold mb-10">
                testimonials
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {testimonials.map((item) => (
                    <Card key={item.description} className="bg-[#353535] border-none text-white">
                        <CardHeader>
                             <CardTitle className="flex items-center gap-x-2">
                                <div>
                                    <p className="text-lg">{item.name}</p>
                                    <p className="text-zinc-400 text-sm">{item.title}</p>
                                </div>
                            </CardTitle>
                            <CardContent className="pt-4 px-0">
                                {item.description}
                            </CardContent>
                        </CardHeader>
                    </Card>
                ))}
            </div>
        </div>
    )
}