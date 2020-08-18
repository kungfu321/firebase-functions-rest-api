import express from 'express';
const api = express();
import authRouter from './routes/authRouter';
// import { authorization, adminOnly } from './middleware/authMiddleware';

api.use('/auth', authRouter);
// api.use('/orders', [authorization], orderRouter);

// admin
// api.use('/admins/orders', [authorization, adminOnly], adminOrderRouter);

export default api;
