'use client'
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import * as D20Svg from '../resources/images/d20.svg';

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const tabs = [{name:'Battles', link:'battles'},{name:'Monsters', link:'monsters'},{name:'Me', link:'me'}]
  return (
    <html lang="en">
      <body className="bg-gray-400 h-screen w-screen">
      <Navbar>
      <NavbarBrand>
        <Logo />
        <p className="font-bold text-inherit">Dnd Pal</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {tabs.map((tab,key)=> (
            <NavbarItem key={key}>
                <Link name={tab.name} link={tab.link}/>
            </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
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
function Logo(){
    return(
        <div></div>
    )
}