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

## Portfolio

*   `src/data/portfolio.json`: Dados dos projetos.

Exemplo de projeto:
[
    {
        "id": "1",
        "title": "Sistema de Gestão Escolar",
        "description": "Uma plataforma completa para gestão de alunos, notas e frequência, com dashboard administrativo intuitivo.",
        "coverUrl": "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=2071&auto=format&fit=crop",
        "technologies": [
            "React",
            "Node.js",
            "PostgreSQL"
        ],
        "githubUrl": "https://github.com/connecta-ci/gestao-escolar",
        "demoUrl": "https://demo-gestao.connecta.com"
    }
]