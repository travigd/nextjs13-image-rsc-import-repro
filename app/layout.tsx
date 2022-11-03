import Image from "next/image";
import vercel from "./vercel.server.svg";
import wikimedia from "./wikimedia.server.png";


export default function Layout({ children }: { children: React.ReactNode}) {
    return <html lang="en">
    <body>
    <div>
        <h2>Server Side</h2>
        <Image src={vercel} alt="Vercel Server Import"/>
        <Image src={wikimedia} alt="Wikimedia Server Import" width={100}/>
    </div>
    <div>{children}</div>
    </body></html>
}