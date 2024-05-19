import express, { Request, Response } from 'express';
import cors from 'cors';
import { StudentRoutes } from './app/modules/student/student.route';
const app = express();

// parsers
app.use(express.json());
app.use(cors());

app.use('/api/v1/students', StudentRoutes);

const getController = (req: Request, res: Response) => {
  res.json({ a: 10 });
};

app.get('/', getController);

export default app;
