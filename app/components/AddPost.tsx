'use client'

import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

export default function CreatePost() {
    const [title, setTitle] = useState("");
    const [isDisabled, setIsDisabled] = useState(false);
    const queryClient = useQueryClient();

    const { mutate } = useMutation({
        mutationFn: async (newTitle: string) => {
            return await axios.post("/api/posts/addPost", { title: newTitle });
        },
        onMutate: () => {
            setIsDisabled(true);
        },
        onSuccess: () => {
            alert("Post created successfully!");
            setTitle("");
            setIsDisabled(false);
            queryClient.invalidateQueries({
                queryKey: ["posts"],
            });
        },
        onError: (error) => {
            console.error("Error creating post:", error);
            alert("Failed to create post.");
            setIsDisabled(false);
        },
    });

    const submitPost = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        if (!title.trim()) {
            alert("Please enter a title for your post.");
            return;
        }
        if (title.length > 600) {
            alert("Title exceeds the maximum length of 600 characters.");
            return;
        }
        mutate(title);
    };

    return (
        <form onSubmit={submitPost} className="bg-gray-200 my-8 p-8 rounded-md">
            <div className="flex flex-col my-4">
                <label htmlFor="title" className="sr-only">Title</label>
                <textarea
                    id="title"
                    name="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value.slice(0, 600))}
                    placeholder="What's on your mind?"
                    className="postformbox"
                    aria-label="Post title"
                ></textarea>
            </div>
            <div className="flex items-center justify-between gap-2">
                <p className={`font-bold text-sm ${title.length === 600 ? "text-red-700" : "text-gray-700"}`}>{`${title.length}/600`}</p>
                <button
                    disabled={isDisabled || title.trim().length === 0}
                    className="text-sm bg-teal-600 text-white py-2 px-6 rounded-xl disabled:opacity-50 cursor-pointer"
                    type="submit"
                >
                    Post That Poop
                </button>
            </div>
        </form>
    );
}
