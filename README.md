# 📝 Blog EBAC - Next.js 15

Uma aplicação de blog moderna construída com Next.js 15, App Router, TypeScript e Tailwind CSS.

[![CI/CD Pipeline](https://github.com/seu-usuario/blog-ebac/actions/workflows/main.yml/badge.svg)](https://github.com/seu-usuario/blog-ebac/actions/workflows/main.yml)

## 🚀 Funcionalidades

- ✅ **App Router** do Next.js 15
- ✅ **Server Components** com carregamento assíncrono de dados
- ✅ **Rotas Dinâmicas** com `[slug]`
- ✅ **SEO Otimizado** com `generateMetadata` dinâmico
- ✅ **SSG (Static Site Generation)** com `generateStaticParams`
- ✅ **TypeScript** para type safety
- ✅ **Tailwind CSS** para estilização
- ✅ **Responsivo** e com suporte a dark mode
- ✅ **JSON Local** como fonte de dados
- ✅ **CI/CD** com GitHub Actions

## 📋 Requisitos

- Node.js 18.17 ou superior
- npm, yarn ou pnpm

## 🛠️ Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/blog-ebac.git

# Entre no diretório
cd blog-ebac

# Instale as dependências
npm install
```

## 🏃 Executando o Projeto

### Modo Desenvolvimento

```bash
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

### Build de Produção

```bash
npm run build
npm start
```

## 📁 Estrutura do Projeto

```
blog-ebac/
├── app/
│   ├── artigos/
│   │   └── [slug]/
│   │       └── page.tsx       # Página dinâmica dos artigos
│   ├── layout.tsx             # Layout global
│   ├── page.tsx               # Página inicial (listagem)
│   ├── not-found.tsx          # Página 404
│   └── globals.css            # Estilos globais
├── data/
│   └── artigos.json           # Dados dos artigos
├── lib/
│   ├── artigos.ts             # Funções para buscar artigos
│   └── types.ts               # Definições TypeScript
└── README.md
```

## 🎨 Páginas

- **`/`** - Lista todos os artigos do blog
- **`/artigos/[slug]`** - Exibe um artigo específico com SEO otimizado

## 🔍 SEO

Cada artigo possui metadados dinâmicos incluindo:
- Title personalizado
- Description (resumo do artigo)
- Open Graph tags
- Twitter Card tags
- Author metadata
- Published time

## 📦 Tecnologias Utilizadas

- [Next.js 15](https://nextjs.org/) - Framework React
- [TypeScript](https://www.typescriptlang.org/) - Tipagem estática
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS
- [React 19](https://react.dev/) - Biblioteca UI

## 🌐 Deploy

**🔗 Site Publicado:** [https://seu-usuario.github.io/blog-ebac](https://seu-usuario.github.io/blog-ebac)

> ⚠️ **Importante:** Substitua `seu-usuario` pelo seu nome de usuário do GitHub após o primeiro deploy.

### CI/CD Automatizado

Este projeto possui uma pipeline completa de CI/CD configurada com GitHub Actions:

#### 🔄 Integração Contínua (CI)
- **ESLint**: Validação de código
- **Testes**: Execução de testes automatizados
- **Build**: Compilação do projeto

#### 🚀 Entrega Contínua (CD)
- **Deploy Automático**: Publicação no GitHub Pages
- **Trigger**: Executado automaticamente a cada push na branch `main`

### Configuração do GitHub Pages

Para habilitar o GitHub Pages no seu repositório:

1. Vá em **Settings** > **Pages** do seu repositório
2. Em **Source**, selecione **GitHub Actions**
3. Aguarde o primeiro workflow completar
4. O site estará disponível em `https://seu-usuario.github.io/blog-ebac`

### Deploy no Vercel (Alternativa)

1. Faça push do código para o GitHub:
```bash
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/seu-usuario/blog-ebac.git
git push -u origin main
```

2. Importe o projeto no [Vercel](https://vercel.com):
   - Acesse [vercel.com/new](https://vercel.com/new)
   - Conecte sua conta GitHub
   - Selecione o repositório `blog-ebac`
   - Clique em "Deploy"

O Vercel detectará automaticamente que é um projeto Next.js e aplicará as configurações corretas.

### Variáveis de Ambiente

Este projeto não requer variáveis de ambiente, pois usa dados locais. Para usar uma API externa:

1. Crie um arquivo `.env.local`:
```env
NEXT_PUBLIC_API_URL=https://sua-api.com
```

2. Configure a mesma variável no Vercel Dashboard

## � CI/CD Pipeline

### Workflow Configurado

O arquivo [`.github/workflows/main.yml`](.github/workflows/main.yml) contém toda a configuração da pipeline:

**Jobs:**
1. **CI (Integração Contínua)**
   - Checkout do código
   - Configuração do Node.js 20
   - Instalação de dependências (`npm ci`)
   - Execução do ESLint (`npm run lint`)
   - Execução dos testes (`npm run test`)
   - Build da aplicação (`npm run build`)

2. **Deploy (Entrega Contínua)**
   - Executa apenas após o CI passar
   - Apenas em push para branch `main`
   - Deploy automático no GitHub Pages

### Monitoramento

Acesse a aba **Actions** do GitHub para:
- ✅ Acompanhar execuções dos workflows
- 📊 Ver logs detalhados de cada etapa
- ❌ Identificar e corrigir erros
- 📈 Histórico completo de deploys

### Comandos Úteis

```bash
# Rodar lint localmente
npm run lint

# Rodar testes
npm run test

# Build para produção
npm run build
```

## �📝 Como Adicionar Novos Artigos

Edite o arquivo `data/artigos.json` e adicione um novo objeto:

```json
{
  "slug": "seu-novo-artigo",
  "titulo": "Título do Artigo",
  "autor": "Seu Nome",
  "dataPublicacao": "2026-01-10",
  "resumo": "Breve descrição do artigo",
  "conteudo": "Conteúdo completo do artigo..."
}
```

O slug será usado na URL: `/artigos/seu-novo-artigo`

## 🎯 Boas Práticas Implementadas

- ✅ Server Components por padrão (sem `'use client'` desnecessário)
- ✅ Async/await em Server Components (sem `useEffect` para data fetching)
- ✅ TypeScript com interfaces bem definidas
- ✅ Metadados dinâmicos para SEO
- ✅ generateStaticParams para SSG
- ✅ Código limpo e bem organizado
- ✅ Responsividade mobile-first
- ✅ Acessibilidade (semantic HTML, ARIA labels)

## 📄 Licença

Este projeto foi desenvolvido como exercício prático do curso EBAC.

## 👨‍💻 Autor

Desenvolvido com ❤️ para o curso EBAC

---

**Links Úteis:**
- [Documentação Next.js](https://nextjs.org/docs)
- [Documentação TypeScript](https://www.typescriptlang.org/docs)
- [Documentação Tailwind](https://tailwindcss.com/docs)
