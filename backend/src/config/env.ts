import dotenv from 'dotenv';

dotenv.config();

export const env = {
    port: process.env.PORT,
    email: {
        host: process.env.EMAIL_HOST,
        port: parseInt(process.env.EMAIL_PORT || '587'),
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
        secure: process.env.EMAIL_SECURE === 'true',
        from: process.env.EMAIL_FROM,
        to: process.env.EMAIL_TO,
    },
};
