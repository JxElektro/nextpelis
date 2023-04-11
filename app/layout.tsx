import { Poppins } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";

const font = Poppins({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata = {
  title: `Next Pelis`,
  description: "A simple movie app built with Next.js",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${font.className}`}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
