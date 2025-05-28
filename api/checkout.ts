import { VercelRequest, VercelResponse } from '@vercel/node';

export default function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method === 'GET') {
    res.status(200).send('Checkout success');
  } else {
    res.status(405).send('Method Not Allowed');
  }
}
