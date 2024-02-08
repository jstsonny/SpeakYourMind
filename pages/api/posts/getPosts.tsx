import type { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]";
import prisma from '../../../prisma/client';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const session = await getServerSession(req, res, authOptions);
    if (!session || !session.user || !session.user.email) {
      return res.status(401).json({ message: 'Please sign in to view posts' });
    }

    try {
      const posts = await prisma.post.findMany({
        include:{
            user:true,
        },
        orderBy: {
            createdAt: "desc",
        }
      });

      return res.status(200).json(posts);
    } catch (error) {
      console.error('Error fetching posts:', error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    return res.status(405).end('Method Not Allowed');
  }
}
