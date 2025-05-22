import { Geist, Geist_Mono } from "next/font/google";
import navbar from "@/components/navbar";
import footer from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Admin: Facebook - Connect with friends and the world around you on Facebook.",
  description: "Facebook helps you connect and share with the people in your life.",
};

export default function RootLayout({ children }) {
  return (
    <>
        <span>Admin Navbar</span>
        {children}
    </>
  );
}
