# Connecta Backend API

API responsável por gerenciar o envio de emails do formulário de contato da Landing Page da Connecta CI.

## Tecnologias

*   Node.js
*   Express
*   TypeScript
*   Resend

## Instalação

1.  Instale as dependências:
    ```bash
    npm install
    ```

2.  Crie um arquivo `.env` na raiz da pasta `backend` baseando-se no `.env.example`:
    ```ini
    PORT=3001
    RESEND_API_KEY=re_123456...
    EMAIL_FROM=onboarding@resend.dev
    EMAIL_TO=seu_email@gmail.com
    ```

    > **Nota**: Obtenha sua chave em [resend.com](https://resend.com/api-keys). Enquanto não configurar um domínio próprio, usar `onboarding@resend.dev` no `EMAIL_FROM`.

## Scripts

*   `npm run dev`: Inicia o servidor em modo de desenvolvimento (com hot-reload).

**Corpo da Requisição (JSON):**
```json
{
  "name": "João Silva",
  "email": "joao@example.com",
  "subject": "partnership",
  "message": "Gostaria de saber mais sobre parcerias."
}
```

**Resposta de Sucesso (200):**
```json
{
  "success": true,
  "message": "Email enviado com sucesso!"
}
```
