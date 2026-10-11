import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { reflectionRouter } from './routes/reflection';

const app = express();
app.use(cors());
app.use(express.json({ limit: '50kb' }));

app.get('/health', (_req, res) => res.json({ ok: true, demo: process.env.DEMO_MODE === 'true' }));
app.use('/reflection', reflectionRouter);

const port = Number(process.env.PORT ?? 3333);
app.listen(port, () => console.log(`Selá backend em http://localhost:${port}`));
