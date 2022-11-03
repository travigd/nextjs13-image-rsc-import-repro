"use client";

import Image from "next/image";
import vercel from "./vercel.client.svg"
import wikimedia from "./wikimedia.client.png"

export default function HelloPage() {
    return (
    <div>
      <h2>Client side</h2>
        <Image src={vercel} alt={"Vercel Client Import"}/>
        <Image src={wikimedia} alt={"Wikimedia Server Import"} width={100}/>
    </div>
  );
}