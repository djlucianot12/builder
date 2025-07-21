import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Builder App',
  description: 'A Next.js application built with Builder.io',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
