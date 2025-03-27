import { Inter } from "next/font/google";
import Footer from "@/components/footer/Footer";
import "./globals.css";
import Navbar from "@/components/header/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "My Next.js App",
  description: "An optimized Next.js application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="main-layout-division flex flex-col min-h-screen ">
          <Navbar />
          <main className="flex-grow p-4 ">{children}</main>{" "}
          {/* Add flex-grow */}
          <Footer />
        </div>
      </body>
    </html>
  );
}
