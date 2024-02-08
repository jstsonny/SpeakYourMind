import type { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]";
import prisma from '../../../prisma/client';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const session = await getServerSession(req, res, authOptions);
    if (!session || !session.user || !session.user.email) {
      return res.status(401).json({ message: 'Please sign in to make a post' });
    }

    const { title } = req.body;
    if (!title) {
      return res.status(400).json({ message: 'Title is required' });
    }

    try {
      // Fetch the user based on the email from the session
      const prismaUser = await prisma.user.findUnique({
        where: {
          email: session.user.email,
        },
      });

      if (!prismaUser) {
        return res.status(404).json({ message: 'User not found' });
      }

      // Create a new post using the user's ID
      const newPost = await prisma.post.create({
        data: {
          title,
          published: false, // Assuming you want to set it as unpublished initially
          userId: prismaUser.id, // Use the fetched user's ID
        },
      });

      return res.status(201).json(newPost);
    } catch (error) {
      console.error('Error creating post:', error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end('Method Not Allowed');
  }
}
