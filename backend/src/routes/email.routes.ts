import { Router } from 'express';
import { sendEmailController } from '../controllers/email.controller';

const router = Router();

router.post('/send-email', sendEmailController);

export default router;
