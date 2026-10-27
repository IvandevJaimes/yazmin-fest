import type { Metadata } from "next";
import {
  Bodoni_Moda,
  Manrope,
  Parisienne,
} from "next/font/google";
import "./globals.css";

const editorial = Bodoni_Moda({
  variable: "--font-bodoni",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const body = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const handwriting = Parisienne({
  variable: "--font-parisienne",
  subsets: ["latin"],
  weight: "400",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000");

const shareTitle = "Yazmin Fest · Mis XV";
const shareDescription =
  "Te invito a celebrar mis 15. 20 de noviembre en Salón Isaura Eventos, Alderetes.";
const shareImage = {
  url: "/opengraph-image.jpeg",
  width: 960,
  height: 1280,
  alt: "Yazmin en el campo, la foto de portada de su invitación de 15.",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: shareTitle,
  description: shareDescription,
  openGraph: {
    title: shareTitle,
    description: shareDescription,
    type: "website",
    locale: "es_AR",
    siteName: "Yazmin Fest",
    images: [shareImage],
  },
  twitter: {
    card: "summary_large_image",
    title: shareTitle,
    description: shareDescription,
    images: [shareImage],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es-AR"
      className={`${editorial.variable} ${body.variable} ${handwriting.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
