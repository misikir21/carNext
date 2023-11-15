import { Navbar, Footer } from "@/component";
import "./globals.css";

export const Metadata = {
  title: "Hulu Cars",
  description: "Discover the best cars in the town",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
