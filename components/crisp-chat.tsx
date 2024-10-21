"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
    useEffect(() => {
        Crisp.configure("306bcbb2-6b84-41d3-95f4-276689138efe");
    }, []);

    return null;
}