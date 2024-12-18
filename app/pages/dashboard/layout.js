
import { Inter } from "next/font/google";
import Footer from "@/app/components/general/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Fix IT",
  description:
    "The best and the most trusted home services providers website on the internet",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#FBE4CC]">
        {children}
      </body>
      <Footer />
    </html>
  );
}
