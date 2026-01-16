# Blog EBAC

Blog desenvolvido com Next.js 15, TypeScript e Tailwind CSS.

## Instalação

```bash
git clone https://github.com/seu-usuario/blog-ebac.git
cd blog-ebac
npm install
```

## Desenvolvimento

```bash
npm run dev
```

## Build

```bash
npm run build
npm start
```

## Estrutura

```
blog-ebac/
├── app/
│   ├── artigos/[slug]/page.tsx
│   ├── layout.tsx
│   ├── page.tsx
│   └── not-found.tsx
├── data/
│   └── artigos.json
└── lib/
    ├── artigos.ts
    └── types.ts
```

## Tecnologias

- Next.js 15
- TypeScript
- Tailwind CSS
- React 19

## Deploy

Configurado para deploy automático no GitHub Pages via GitHub Actions:

1. Settings > Pages > Source: GitHub Actions
2. Push para `main` dispara deploy automático

## Adicionar Artigos

Edite `data/artigos.json`:

```json
{
  "slug": "novo-artigo",
  "titulo": "Título do Artigo",
  "autor": "Seu Nome",
  "dataPublicacao": "2026-01-10",
  "resumo": "Breve descrição",
  "conteudo": "Conteúdo completo..."
}
```
