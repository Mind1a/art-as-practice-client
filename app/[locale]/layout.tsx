import type { Metadata } from "next"

import { hasLocale, NextIntlClientProvider } from "next-intl"

import { getMessages } from "next-intl/server"

import { Montserrat, Geist, Bai_Jamjuree, Inter } from "next/font/google"
import { notFound } from "next/navigation"

import "./globals.css"
import { routing } from "feature/i18n/routing"
import Footer from "feature/landing/components/composities/Footer"
import Header from "feature/landing/components/composities/Header"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
})

const baiJamjuree = Bai_Jamjuree({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"], // Bai Jamjuree requires explicit weights
  variable: "--font-bai-jamjuree",
})

export const metadata: Metadata = {
  title: "Aurum",
  description: "Aurum is a Georgian crypto exchange platform.",
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }
  const messages = await getMessages()

  return (
    <html lang={locale} className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} antialiased ${montserrat.variable} ${baiJamjuree.variable} ${inter.variable}`}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
