import { MongoClient } from 'mongodb';
import type { NextApiRequest, NextApiResponse } from 'next';
import { MailData } from '../../mocked/mails';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<MailData[]>
): Promise<void> {
  if (req.method === 'OPTIONS') {
    res.status(200).end();
  }

  if (req.method === 'GET') {
    const client = await MongoClient.connect(`${process.env.MONGODB_URL}`);

    const db = client.db();
    const mailsCollection = db.collection<MailData>('mails');
    const result = await mailsCollection.find().toArray();

    client.close();

    res.setHeader('Cache-Control', 's-maxage=100, stale-while-revalidate');

    res.status(200).json(result);
  }
}
