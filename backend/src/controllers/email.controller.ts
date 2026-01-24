import { Request, Response } from 'express';
import { sendEmail } from '../services/email.service';
import { EmailData } from '../types/email.types';

export const sendEmailController = async (req: Request, res: Response): Promise<void> => {
    try {
        const { name, email, subject, message }: EmailData = req.body;

        if (!name || !email || !message) {
            res.status(400).json({ success: false, message: 'Campos obrigatórios faltando.' });
            return;
        }

        await sendEmail({ name, email, subject, message });

        res.status(200).json({ success: true, message: 'Email enviado com sucesso!' });
    } catch (error) {
        console.error('Erro ao enviar email:', error);
        res.status(500).json({ success: false, message: 'Erro ao enviar email. Tente novamente mais tarde.' });
    }
};

