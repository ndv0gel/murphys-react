import type { Metadata } from "next";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./globals.css";

export const metadata: Metadata = {
  title: "Murphy's Bar & Grill",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="d-flex flex-column min-vh-100" >
        {children}
      </body>
    </html>
  );
}
