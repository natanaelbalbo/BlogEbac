# 📝 Blog EBAC

Projeto de blog desenvolvido como parte do curso de Engenheiro Front-end da EBAC. Uma aplicação moderna que demonstra o uso das principais funcionalidades do Next.js 15, incluindo App Router, Server Components e geração estática de páginas.

## 🎯 Sobre o Projeto

Este blog foi criado para resolver o desafio de construir uma aplicação web performática e com SEO otimizado. O projeto foca em criar uma experiência de leitura agradável, com navegação rápida entre artigos e carregamento instantâneo das páginas através de pré-renderização estática.

### Problema Resolvido

Muitos blogs sofrem com problemas de performance e SEO. Este projeto aborda essas questões usando:
- **SSG (Static Site Generation)**: Todas as páginas são geradas em build time, resultando em carregamento instantâneo
- **SEO Otimizado**: Metadados dinâmicos para cada artigo, melhorando indexação em buscadores
- **Performance**: Server Components reduzem o JavaScript enviado ao cliente

## 📚 O Que Aprendi

Durante o desenvolvimento deste projeto, aprofundei conhecimentos em:

- **Next.js 15 App Router**: Migração do Pages Router para a arquitetura moderna com App Router
- **Server Components**: Entender quando usar Server vs Client Components e os benefícios de cada um
- **TypeScript**: Tipagem forte para prevenir bugs e melhorar a manutenibilidade
- **Rotas Dinâmicas**: Implementação de `[slug]` para criar páginas dinamicamente
- **generateStaticParams**: Pré-renderização de rotas dinâmicas em build time
- **Metadata API**: Sistema moderno do Next.js para gerenciar SEO
- **GitHub Actions**: Configuração de pipeline CI/CD para deploy automatizado
- **Tailwind CSS**: Estilização com utility-first e implementação de dark mode

## 🚀 Tecnologias Utilizadas

- **Next.js 15** - Framework React com App Router
- **TypeScript** - Superset JavaScript com tipagem estática
- **Tailwind CSS** - Framework CSS utility-first
- **React 19** - Biblioteca para interfaces de usuário

## ⚙️ Instalação e Uso

### Pré-requisitos

- Node.js 18 ou superior
- npm ou yarn

### Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/blog-ebac.git

# Entre na pasta do projeto
cd blog-ebac

# Instale as dependências
npm install
```

### Executar em Desenvolvimento

```bash
npm run dev
```

Acesse http://localhost:3000 no navegador.

### Build para Produção

```bash
npm run build
npm start
```

## 📁 Estrutura do Projeto

```
blog-ebac/
├── app/
│   ├── artigos/[slug]/
│   │   └── page.tsx          # Páginas dinâmicas dos artigos
│   ├── layout.tsx            # Layout raiz da aplicação
│   ├── page.tsx              # Página inicial (listagem)
│   ├── not-found.tsx         # Página de erro 404
│   └── globals.css           # Estilos globais
├── data/
│   └── artigos.json          # Base de dados dos artigos
├── lib/
│   ├── artigos.ts            # Funções para manipular artigos
│   └── types.ts              # Tipos TypeScript
└── public/                   # Arquivos estáticos
```

## 🌐 Deploy

O projeto utiliza GitHub Actions para CI/CD automático:

**Processo:**
1. Push para branch `main` dispara o workflow
2. GitHub Actions executa build e lint
3. Deploy automático para GitHub Pages

**Configuração no GitHub:**
1. Vá em Settings → Pages
2. Source: GitHub Actions
3. O site ficará disponível em `https://seu-usuario.github.io/blog-ebac`

## ✍️ Como Adicionar Novos Artigos

Edite o arquivo `data/artigos.json` e adicione um novo objeto:

```json
{
  "slug": "meu-novo-artigo",
  "titulo": "Título do Artigo",
  "autor": "Seu Nome",
  "dataPublicacao": "2026-01-16",
  "resumo": "Uma breve descrição do que o artigo aborda",
  "conteudo": "Conteúdo completo do artigo em texto. Pode ter múltiplos parágrafos separados por \\n\\n"
}
```

O `slug` será usado na URL: `/artigos/meu-novo-artigo`

## 🎨 Features

- ✨ Design responsivo que funciona em mobile, tablet e desktop
- 🌙 Dark mode automático baseado na preferência do sistema
- ⚡ Carregamento instantâneo através de SSG
- 🔍 SEO otimizado com Open Graph e Twitter Cards
- 📱 Interface moderna e limpa
- ♿ Acessível com HTML semântico

## 📝 Licença

Projeto desenvolvido para fins educacionais no curso EBAC.
