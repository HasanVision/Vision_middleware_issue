import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import "@radix-ui/themes/styles.css"
import {Theme, ThemePanel} from "@radix-ui/themes"
import React from "react";
import {siteConfig} from "@/src/config/site";

import{SessionProvider} from "next-auth/react";
import {auth} from "@/auth"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
      default: siteConfig.name,
      template:`%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
   /* icons: [
        {
            url:"/logo.svg",
            href:"/logo.svg"
        }
    ]
    */

};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

    const session = await auth();
  return (
      <SessionProvider session={session}>


    <html lang="en">
      <body className={inter.className}>
      <Theme  appearance="dark">
          {children}
      </Theme>
      </body>
    </html>
      </SessionProvider>
  );
}
