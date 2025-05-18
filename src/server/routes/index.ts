import { Router } from 'express';
import authRoutes from './authRoutes';
import agencyRoutes from './agencyRoutes';
import companyRoutes from './companyRoutes';
import userRoutes from './userRoutes';
import whatsappRoutes from './whatsappRoutes';
import templateRoutes from './templateRoutes';
import webhookRoutes from './webhookRoutes';

const router = Router();

// API routes
router.use('/auth', authRoutes);
router.use('/agencies', agencyRoutes);
router.use('/companies', companyRoutes);
router.use('/users', userRoutes);
router.use('/whatsapp', whatsappRoutes);
router.use('/templates', templateRoutes);
router.use('/webhooks', webhookRoutes);

export default router;
