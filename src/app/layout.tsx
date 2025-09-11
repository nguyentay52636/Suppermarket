import type { Metadata } from "next";
import "./globals.css";
import ClientLayout from "./ClientLayout";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "Supermarket",
  description: "Supermarket",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange >
          <ClientLayout>
            {children}
          </ClientLayout>
        </ThemeProvider>

      </body>
    </html>
  );
}
