import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      <div id="menu" style={{backgroundColor: "#0c0d0fb3"}}>
        <Link name="Monsters" link="monsters"/>
        <Link name="Us" link="us"/>
      </div>
      {children}
      </body>
    </html>
  );
}

function Link(props){
  const {link, name} = props
  return(
    <a href={link}>{name}</a>
  )
}
