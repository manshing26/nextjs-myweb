import { inter } from "@/app/UI/fonts";
import "./globals.css";
import NavBar from "@/app/UI/Nav";
import Footer from "@/app/UI/Footer";

export const metadata = {
  title: "Leon Man | Portfolio",
  description: "Leon Man's portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png" />
      </head>
      <body className={inter.className + " bg-black"}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
