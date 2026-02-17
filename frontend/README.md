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

*   `src/components`: Componentes reutilizáveis e páginas;
*   `src/assets`: Imagens e arquivos estáticos;
*   `src/data`: Arquivos JSON para portifolio e equipe;
*   `src/service`: Comunicação com API e Backend;
*   `src/types`: Interfaces utilizadas no projeto;
*   `src/App.tsx`: Componente raiz.

## Portfolio

*   `src/data/portfolio.json`: Dados dos projetos.

```
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
```

## Equipe

*   `src/data/teamHierarchy.json`: Configuração da hierarquia e cargos do time.

### Estrutura do JSON

O arquivo é dividido em duas partes principais:

1.  **`roleDefinitions`**: Define os cargos disponíveis, sua ordem de exibição e o selo (label) que aparecerá no site.
    *   `id`: Identificador único do cargo (ex: `PRESIDENTE`).
    *   `label`: Nome exibido no site.
    *   `order`: Ordem de prioridade na exibição (menor número aparece primeiro).

2.  **`memberMapping`**: Associa o nome do membro (retornado pela API) ao seu respectivo cargo (`id`).
    *   A chave deve ser o nome exato retornado pela API.
    *   O valor deve ser um `id` definido em `roleDefinitions`.

### Exemplo de Configuração

```json
{
  "roleDefinitions": [
    { "id": "PRESIDENTE", "label": "Presidente", "order": 1 },
    { "id": "MEMBRO", "label": "Membro", "order": 7 }
  ],
  "memberMapping": {
    "Pedro Falconi": "PRESIDENTE",
    "Nathan Nóbrega": "MEMBRO"
  }
}
```

