import type { Metadata } from "next";
import "./globals.css";
import ClientLayout from "./ClientLayout";
import { ThemeProvider } from "@/components/ThemeProvider";
import ReduxProvider from "@/components/ReduxProvider";
import BackToTop from "@/components/BackToTop/BackToTop";

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
        <ReduxProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system" >

            <ClientLayout>
              {children}
            </ClientLayout>

          </ThemeProvider>
        </ReduxProvider>
        <BackToTop />
      </body>
    </html >
  );
}
