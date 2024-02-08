'use client'
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

export default function CreatePost() {
    const [title, setTitle] = useState("");
    const [isDisabled, setIsDisabled] = useState(false);

    // Set up the mutation
    const { mutate } = useMutation({
        mutationFn: async (newTitle: string) => {
            return await axios.post("/api/posts/addPost", { title: newTitle });
        },
        onMutate: () => {
            setIsDisabled(true); // Optionally disable the button immediately when mutation starts
        },
        onSuccess: () => {
            // Handle successful post creation
            alert("Post created successfully!");
            setTitle(""); // Clear the title after successful post creation
            setIsDisabled(false); // Re-enable the button
        },
        onError: (error) => {
            // Handle any error from the post creation process
            console.error("Error creating post:", error);
            alert("Failed to create post.");
            setIsDisabled(false); // Re-enable the button on error
        }
    });

    const submitPost = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        mutate(title); // Correctly pass the title as an argument
    };

    return (
        <form onSubmit={submitPost} className="bg-white my-8 p-8 rounded-md">
            <div className="flex flex-col my-4">
                <textarea
                    name="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="What's on your mind?"
                    className="p-4 text-lg rounded-md my2 bg-gray-200"
                ></textarea>
            </div>
            <div className="flex items-center justify-between gap-2">
                <p className={`font-bold text-sm ${title.length > 300 ? "text-red-700" : "text-gray-700"}`}>{`${title.length}/300`}</p>
                <button
                    disabled={isDisabled}
                    className="text-sm bg-teal-600 text-white py-2 px-6 rounded-xl disabled:opacity-25"
                    type="submit"
                >
                    Post That Poop
                </button>
            </div>
        </form>
    );
}
