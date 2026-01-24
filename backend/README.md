# Connecta Backend API

API responsável por gerenciar o envio de emails do formulário de contato da Landing Page da Connecta CI.

## Tecnologias

*   Node.js
*   Express
*   TypeScript
*   Nodemailer

## Instalação

1.  Instale as dependências:
    ```bash
    npm install
    ```

2.  Crie um arquivo `.env` na raiz da pasta `backend` baseando-se no `.env.example`:
    ```ini
    PORT=3001
    EMAIL_HOST=smtp.gmail.com
    EMAIL_PORT=587
    EMAIL_USER=seu_email@gmail.com
    EMAIL_PASS=sua_senha_de_app
    EMAIL_FROM="seu_email@gmail.com"
    EMAIL_TO=seu_email@gmail.com
    ```

    > **Importante**: Para usar o Gmail, você DEVE gerar uma **Senha de App** em [myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords). Não use sua senha de login normal.

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
