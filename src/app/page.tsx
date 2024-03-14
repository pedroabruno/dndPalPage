'use client'
import Image from "next/image";
import {NextUIProvider} from "@nextui-org/system";
export default function Home() {
  return (
    <NextUIProvider>
        <div>
            <a>MAIN PAGE</a>
        </div>
    </NextUIProvider>
  );
}
