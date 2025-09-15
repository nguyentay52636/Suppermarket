"use client";
import { usePathname } from "next/navigation";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isAuthPage = pathname?.startsWith("/auth/") ?? false;
  const isAdminPage = pathname?.startsWith("/admin") ?? false;

  return (
    <>
      {!isAuthPage && !isAdminPage && <Header />}
      {children}
      {!isAuthPage && !isAdminPage && <Footer />}
    </>
  );
}
