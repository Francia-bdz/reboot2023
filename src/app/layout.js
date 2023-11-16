import { Inter } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: "Degrowth",
  description: "Explorez deux futurs contrastés sur notre site interactif, un sur lequel l’humanité a su s’adaptée aux manques de ressources naturelles et un autre ou l’on a subi les conséquences de notre inaction !",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
