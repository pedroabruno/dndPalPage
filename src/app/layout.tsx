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
      <body className="bg-gray-400">
      <div id="menu" className="bg-gray-300 text-gray-800 flex p-2">
        <Link name="Monsters" link="monsters"/>
        <Link name="Me" link="me"/>
      </div>
      {children}
      </body>
    </html>
  );
}

function Link(props : any){
  const {link, name} = props
  return(
    <div className="px-5">
        <a href={link}>{name}</a>
    </div>
  )
}
