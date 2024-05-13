import { Inter } from "next/font/google";
import "../globals.css";
import MainHeader from "@/components/main-header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next News - MOBIN",
  description: "A latest news page for developers",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div id="page">
          <MainHeader />
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
