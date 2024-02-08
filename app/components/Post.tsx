'use client'

import Image from "next/image"
import Link from "next/link"

interface PostProps {
    id: string;
    avatar: string;
    name: string;
    postTitle: string;
}

export default function Post({ avatar, name, postTitle, id }: PostProps) {
    return (
        <div className="bg-gray-200 my-8 p-8 rounded-lg shadow">
            <div className="flex items-center gap-2 mb-4">
                <Image
                    src={avatar || '/default-avatar.png'}
                    alt="avatar"
                    width={32}
                    height={32}
                    className="rounded-full"
                    layout="fixed"
                />
                <h3 className="font-bold text-gray-700">{name}</h3>
            </div>
            <div className="text-gray-600">{postTitle}</div>
            <Link href={`/post/${id}`} passHref>
                <p className="text-sm font-bold text-gray-700">Comments</p>
            </Link>
        </div>
    );
}