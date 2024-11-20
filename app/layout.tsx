import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const Raleway = localFont({
  src: [
    {
      path: "./fonts/Raleway-Black.ttf",
      weight: "900",
      style: "normal",
    },
    {
      path: "./fonts/Raleway-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "./fonts/Raleway-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/Raleway-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/Raleway-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Raleway-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Raleway-Black.ttf",
      weight: "900",
      style: "normal",
    },
    {
      path: "./fonts/Raleway-Thin.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "./fonts/Raleway-ExtraLight.ttf",
      weight: "100",
      style: "normal",
    },
  ],
  variable: "--font-Raleway",
});




export const metadata: Metadata = {
  title: "Next First project",
  description: "Next+tailwind",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${Raleway.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
