'use client'
import Image from "next/image"
import {signOut} from 'next-auth/react'
import Link from 'next/link'

type User = {image: string}

export default function Logged({image}: User){
    return(
        <li className="flex gap-8 items-center">
            <button onClick={() => signOut()} className="btn">Sign Out</button>
            <Link href={"/"}>
                <Image 
                    width={64} 
                    height={64} 
                    src={image}
                    className="w-14 rounded-full"
                    alt="" 
                    priority
                />
            </Link>
        </li>
    )
}