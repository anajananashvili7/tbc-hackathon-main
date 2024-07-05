import type { Metadata } from "next";
import { Noto_Sans_Georgian } from "next/font/google";
import "./globals.css";
import Layout from "@/components/Layouts/Layout";

const noto_sans_georgia = Noto_Sans_Georgian({ subsets: ["georgian", "latin"], weight: ["400", "500", "600", "700"] })

export const metadata: Metadata = {
  title: "EduMate",
  description: "აირჩიე შენთვის საუკეთესო ტუტორი",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ka">
      <body className={noto_sans_georgia.className}>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
}
