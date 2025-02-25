import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import { Montserrat } from "next/font/google";

import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Configuração da fonte Montserrat
const montserrat = Montserrat({
  variable: "--font-montserrat", // Variável CSS
  subsets: ["latin"], // Suporte ao idioma
  weight: ["300", "400", "500", "600", "700"], // Defina os pesos necessários
});

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Rodrigues e Castro Advocacia",
  description:
    "Escritório especializado em Direito Cível, Trabalhista e do Consumidor.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body
        className={`${montserrat.variable} bg-black text-white font-sans antialiased`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body
//         className={`${geistSans.variable} ${geistMono.variable} antialiased`}
//       >
//         {children}
//       </body>
//     </html>
//   );
// }
