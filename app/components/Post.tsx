'use client'

import { DateTime } from "next-auth/providers/kakao";
import Image from "next/image"
import Link from "next/link"

interface PostProps {
    id: string;
    avatar: string;
    name: string;
    postTitle: string;
    CreatedAt: DateTime;
}

export default function Post({ avatar, name, postTitle, id, CreatedAt }: PostProps) {
    const date = new Date(CreatedAt);
    const localDateString = date.toLocaleString(); //use browser timezone

    return (
        <div className="singlePost">
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
                <p className="text-sm text-black">{localDateString}</p>
            </div>
            <div className="text-gray-600">{postTitle}</div>
            {/* <Link href={`/post/${id}`}>
                <p className="text-sm font-bold text-gray-700">Comments</p>
            </Link> */}
        </div>
    );
}