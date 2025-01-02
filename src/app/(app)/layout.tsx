import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";
import MainLayout from "@/components/templates/shared/MainLayout";
import ClientLayout from "./client-layout";

const archivo = Archivo({ subsets: ["latin"], weight: ["400", "500", "700"] });

export const metadata: Metadata = {
  title: "Apply Digital Test",
  description: "Williams Frontend development test for Apply Digital",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={archivo.className}>
        <ClientLayout>
          <MainLayout>{children}</MainLayout>
        </ClientLayout>
      </body>
    </html>
  );
}
