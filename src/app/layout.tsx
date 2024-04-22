import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { ProviderReduxToolkit } from "@/providers/ProviderReduxToolkit";
import { ProviderAntd } from "@/providers/ProviderAntd";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ProviderReduxToolkit>
          <ProviderAntd>
            {children}
          </ProviderAntd>
        </ProviderReduxToolkit>
      </body>
    </html>
  );
}
