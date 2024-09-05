"use client";

import { ThemeProvider } from "@/components/ThemeProvider";
import React from "react";

export default function RootTemplate({
    children,
}: {
    children: React.ReactNode;
}): React.ReactElement {
    return (
        <>
            <ThemeProvider>{children}</ThemeProvider>
        </>
    );
}
