import Navbar from "@/components/common/navbar/Navbar";
import "./globals.scss";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "BillerVest",
  description: "BillerVest web app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={`${roboto.className} bg-main`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
