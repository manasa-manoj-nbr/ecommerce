import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();
const PORT = 5000;

app.use(cors());

// Dummy products endpoint
app.get('/api/products', (req: Request, res: Response) => {
  res.json([
    { id: 1, name: 'Sample Product' }
  ]);
});

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
