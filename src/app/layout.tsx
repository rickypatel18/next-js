
import Footer from "@/components/footer/Footer";
import "./globals.css";
import Navbar from "@/components/header/Navbar";


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
      <body >
        <div className="main-layout-division flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow p-4">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
