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

                <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
                    <div className="flex relative">
                        <main className="flex-1 p-4 md:p-6 ml-0 md:ml-0 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors min-h-screen">
                            <div className="max-w-7xl mx-auto">
                                <Suspense fallback={null}>
                                    <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
                                        {children}
                                    </ThemeProvider>
                                </Suspense>
                            </div>
                        </main>
                    </div>
                </div>
            </body>
        </html>
    )
}
