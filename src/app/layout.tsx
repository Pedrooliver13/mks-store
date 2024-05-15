// Packages
import { ReactElement } from "react";
import { Montserrat } from "next/font/google";
import type { Metadata } from "next";

// Components
import { DefaultProvider } from "components/layout";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-monteserrat",
});

export const metadata: Metadata = {
  title: "MKS Store",
  description: "A simple store for MKS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactElement;
}>) {
  return (
    <html lang="pt-BR" className={`${montserrat.variable}`}>
      <body suppressHydrationWarning>
        <DefaultProvider>{children}</DefaultProvider>
      </body>
    </html>
  );
}
