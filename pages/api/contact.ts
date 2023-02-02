// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  message: string;
};

const handler = (req: NextApiRequest, res: NextApiResponse<Data>) => {
  if (req.method == 'POST') {
    const data = req.body;
  }
  res.status(400).json({ message: 'Bad request' });
};

export default handler;
