import nodemailer from 'nodemailer';
import { env } from '../config/env';
import { EmailData } from '../types/email.types';

const transporter = nodemailer.createTransport({
    host: env.email.host,
    port: env.email.port,
    secure: env.email.secure,
    auth: {
        user: env.email.user,
        pass: env.email.pass,
    },
});

export const sendEmail = async (data: EmailData): Promise<void> => {
    const subjectMap: Record<string, string> = {
        partnership: 'Parceria Empresarial',
        event: 'Proposta de Evento',
        other: 'Outro',
    };

    const formattedSubject = subjectMap[data.subject] || data.subject;

    await transporter.sendMail({
        from: env.email.from,
        to: env.email.to,
        replyTo: data.email,
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
};

