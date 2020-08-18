import { Router } from 'express';
import {  me } from '../controllers/authController';
import { authorization } from '../middleware/authMiddleware';

const authRouter = Router();
authRouter.get('/me', authorization, me);
export default authRouter;
