import GoogleAnalytics from "@/app/GoogleAnalytics";
import BaiDuAnalytics from "@/app/BaiDuAnalytics";
import {NextAuthProvider} from "@/app/providers";

import "../sytles/globals.css"
import "../sytles/loading.css";
import {siteConfig} from "@/config/site";
import {TailwindIndicator} from "@/components/TailwindIndicator";
import {ThemeProvider} from "@/components/ThemeProvider";
import {cn} from "@/lib/utils";
import {Analytics} from "@vercel/analytics/react";
import {Inter as FontSans} from "next/font/google";
import localFont from "next/font/local";
import {Toaster} from "react-hot-toast";
import type {Metadata} from "next";
import {Inter} from "next/font/google";


const inter = Inter({subsets: ["latin"]});

export const fontHeading = localFont({
    src: "../assets/fonts/CalSans-SemiBold.woff2",
    variable: "--font-heading",
});

// @ts-ignore
export const fontSans = FontSans({
    subsets: ["latin"],
    variable: "--font-sans",
});

export const metadata: Metadata = {
    title: 'Disney Pixar AI Posters Generator',
    description: 'This ai powered generator tool allows you to effortlessly transform your ideas and real-life photos into Disney style or Pixar style posters.',
    // keywords: siteConfig.keywords,
    // authors: siteConfig.authors,
    // creator: siteConfig.creator,
    // themeColor: siteConfig.themeColor,
    icons: "/image/22214dogface_98779.ico",
    // metadataBase: siteConfig.metadataBase,
    // openGraph: siteConfig.openGraph,
    // twitter: siteConfig.twitter,
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <html lang="en" suppressHydrationWarning>
        <head/>
        <body
            className={cn(
                "min-h-screen bg-background font-sans antialiased",
                fontSans.variable,
                fontHeading.variable
            )}
        >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <NextAuthProvider>
                {children}
            </NextAuthProvider>
            <Analytics/>
            <Toaster/>
            <TailwindIndicator/>
        </ThemeProvider>
        {process.env.NODE_ENV === "development" ? (
            <></>
        ) : (
            <>
                <GoogleAnalytics/>
                <BaiDuAnalytics/>
            </>
        )}
        </body>
        </html>
    );
}
