import "./globals.css";
import Nav from "./auth/Nav"
import { Roboto } from 'next/font/google'
import QueryWrapper from "./auth/QueryWrapper"

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300'],
  variable: "--font-roboto"
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head />
      <body>
        <QueryWrapper>
          <Nav />
          {children}
        </QueryWrapper>
      </body>
    </html>
  );
}
