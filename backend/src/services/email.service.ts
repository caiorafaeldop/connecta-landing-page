import { Resend } from 'resend';
import { env } from '../config/env';
import { EmailData } from '../types/email.types';

const resend = new Resend(env.resendKey);

export const sendEmail = async (data: EmailData): Promise<void> => {
    const subjectMap: Record<string, string> = {
        partnership: 'Parceria Empresarial',
        event: 'Proposta de Evento',
        other: 'Outro',
    };

    const formattedSubject = subjectMap[data.subject] || data.subject;

    try {
        await resend.emails.send({
            from: env.emailFrom,
            to: env.emailTo,
            reply_to: data.email,
            subject: `[Site Contact] ${formattedSubject} - ${data.name}`,
            text: `
        Nome: ${data.name}
        Email: ${data.email}
        Assunto: ${formattedSubject}
        
        Mensagem:
        ${data.message}
      `,
            html: `
        <h3>Nova mensagem do site</h3>
        <p><strong>Nome:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Assunto:</strong> ${formattedSubject}</p>
        <br/>
        <p><strong>Mensagem:</strong></p>
        <p>${data.message.replace(/\n/g, '<br>')}</p>
      `,
        });
    } catch (error) {
        console.error('Resend API Error:', error);
        throw new Error('Failed to send email via Resend');
    }
};

