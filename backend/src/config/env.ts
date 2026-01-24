import dotenv from 'dotenv';

dotenv.config();

export const env = {
    port: process.env.PORT || 3001,
    resendKey: process.env.RESEND_API_KEY,
    emailFrom: process.env.EMAIL_FROM || 'onboarding@resend.dev',
    emailTo: process.env.EMAIL_TO || 'connecta.ci.pb@gmail.com',
};
