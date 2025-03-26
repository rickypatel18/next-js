"use client"
import Footer from "./components/footer/Footer";
import Navbar from "@/app/components/header/Navbar"
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="main-layout-division flex flex-col min-h-screen ">
          <Navbar />
          <main className="flex-grow p-4 ">{children}</main> {/* Add flex-grow */}
          <Footer />
        </div>
      </body>
    </html>
  );
}
