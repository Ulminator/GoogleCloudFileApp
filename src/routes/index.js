import express from 'express';
import fileRoutes from './fileRoutes';

const router = express.Router();

router.use('/file', fileRoutes);

export default router;
