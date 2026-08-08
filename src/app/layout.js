import { Bebas_Neue, Poppins } from "next/font/google";
import "./globals.css";
import { ScrollProvider } from "../components/ScrollContext";

const bebasNeue = Bebas_Neue({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: "400",
});

const poppins = Poppins({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Mamedes Beats",
  description: "Beats exclusivos e licenciados",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={`${bebasNeue.variable} ${poppins.variable} antialiased`}>
        <video className="bgVideo" autoPlay muted loop playsInline>
          <source src="/bg-dots.mp4" type="video/mp4" />
        </video>
        <div className="bgVideoOverlay"></div>
        <div className="neonEdgeLeft"></div>
        <div className="neonEdgeRight"></div>
        <ScrollProvider>{children}</ScrollProvider>
      </body>
    </html>
  );
}