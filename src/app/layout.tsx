import type { Metadata, Viewport } from "next";
import { Manrope, Playfair_Display } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-editorial",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jaisa.example"),
  title: "Jaísa | Moda, Calçados e Presentes em Sinop",
  description:
    "Encontre moda feminina, masculina, infantil, calçados e presentes na Jaísa, em Sinop–MT. Conheça a loja e fale com a equipe pelo WhatsApp.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Jaísa | Seu estilo em movimento",
    description:
      "Moda para toda a família, calçados e presentes em uma experiência digital contemporânea.",
    type: "website",
    locale: "pt_BR",
    siteName: "Jaísa",
  },
  twitter: { card: "summary_large_image" },
  robots: { index: false, follow: false },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#174d47",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${manrope.variable} ${playfair.variable}`}>
      <body>{children}</body>
    </html>
  );
}
