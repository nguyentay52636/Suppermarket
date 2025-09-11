export default function AuthLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="vi">
            <body>
                <main className="flex min-h-screen items-center justify-center bg-background">
                    {children}
                </main>
            </body>
        </html>
    )
}
