import Navbar from "@/components/common/navbar/Navbar";
import "./globals.scss";
import { Roboto } from "next/font/google";
import BillervestCoin from "@/components/common/product/BillervestCoin";
import Footer from "@/components/common/footer/Footer";
import { Metadata } from "next";

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
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
        <BillervestCoin />
        <Footer />

        <script
          defer
          type="text/javascript"
          src="https://changenow.io/embeds/exchange-widget/v2/stepper-connector.js"
        ></script>
      </body>
    </html>
  );
}
