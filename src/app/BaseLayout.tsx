"use client";

import { Suspense } from "react";
import { ThemeProvider } from "@/components/ThemeProvider";

export default function BaseLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <Suspense fallback={null}>
            <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
            >
                {children}
            </ThemeProvider>
        </Suspense>
    );
}
