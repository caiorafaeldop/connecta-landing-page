# Connecta Landing Page (Frontend)

Interface moderna e responsiva para a Connecta CI, construída com React e Vite.

## Tecnologias

*   React
*   Vite
*   TailwindCSS
*   TypeScript

## Instalação e Execução

1.  Instale as dependências:
    ```bash
    npm install
    ```

2.  Inicie o servidor de desenvolvimento:
    ```bash
    npm run dev
    ```

A aplicação estará disponível em `http://localhost:5173`.

## Integração com Backend

O formulário de contato desta aplicação envia requisições para `http://localhost:3001/api/send-email`.
Certifique-se de que o backend esteja rodando na porta 3001 para que o envio de emails funcione corretamente.

## Estrutura de Pastas

*   `src/components`: Componentes reutilizáveis (Hero, ContactPage, etc).
*   `src/assets`: Imagens e arquivos estáticos.
*   `src/App.tsx`: Componente raiz.
