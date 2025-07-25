import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SessionWrapper from "@/components/SessionWrapper";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Get me a Chai - A Website for Chai Lovers by Umair",
  keywords: "Chai, Tea, Beverage, Umair, Next.js, React",
  description: " This is a Portfolio website for Umair, showcasing his love for Chai/Projects.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_2px)] bg-[size:20px_20px] text-white`} >
        <SessionWrapper>
          <Navbar />
          <div className="min-h-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_2px)] bg-[size:20px_20px] text-white flex flex-col">
            <div className="flex-1 w-full mb-10">
              {children}
            </div>
          </div>
          <Footer /> 
        </SessionWrapper>
      </body>
    </html>
  );
}
