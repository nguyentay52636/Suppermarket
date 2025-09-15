import type React from "react"
import "../globals.css"
import { Suspense } from "react"
import { ThemeProvider } from "@/components/ThemeProvider"



export default function AdminLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body>
                <Suspense fallback={null}>
                    <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
                        {children}
                    </ThemeProvider>
                </Suspense>
            </body>
        </html>
    )
}
