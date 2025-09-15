import type { Metadata } from "next";
import "./globals.css";
import ClientLayout from "./ClientLayout";
import { ThemeProvider } from "@/components/ThemeProvider";
import { PaginationProvider } from "@/context/PaginationContext";
import ReduxProvider from "@/components/ReduxProvider";

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
            <PaginationProvider>
              <ClientLayout>
                {children}
              </ClientLayout>
            </PaginationProvider>
          </ThemeProvider>
        </ReduxProvider>
      </body>
    </html >
  );
}
