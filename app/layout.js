import { inter } from "@/app/UI/fonts";
import "./globals.css";

export const metadata = {
  title: "Leon Man | Portfolio",
  description: "Leon Man's portfolio - Full-Stack Developer & Machine Learning Engineer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png" />
      </head>
      <body className={inter.className + " bg-[#0a0a0f]"}>
        {children}
      </body>
    </html>
  );
}
