'use client'

import {signIn} from 'next-auth/react'

export default function Login() {
    return (
    <li className='list-none'>
        <button onClick={() => signIn()} className="btn">
            Sign In</button>
    </li>
    )
}