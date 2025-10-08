import type { Metadata } from "next"

import { hasLocale, NextIntlClientProvider } from "next-intl"

import { getMessages } from "next-intl/server"

import { Geist } from "next/font/google"
import { notFound } from "next/navigation"

import "./globals.css"
import { routing } from "feature/i18n/routing"
import Footer from "feature/landing/components/composities/Footer"
import Header from "feature/landing/components/composities/Header"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
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
      <body className={`${geistSans.variable} antialiased`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {/* <Header /> */}
          {children}
          {/* <Footer /> */}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
