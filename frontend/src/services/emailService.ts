import { EmailData, EmailResponse } from '../types/types';

const API_URL = import.meta.env.VITE_API_URL;

export const sendEmail = async (data: EmailData): Promise<EmailResponse> => {
    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        const result = await response.json();
        return result;
    } catch (error) {
        console.error('Erro ao enviar email:', error);
        return { success: false, message: 'Erro ao conectar com o servidor.' };
    }
};
