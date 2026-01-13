# 🔐 Configuração de Secrets - Guia Complementar

## Para GitHub Pages (Configuração Atual)

Não é necessário configurar secrets manualmente. O GitHub Actions usa automaticamente o `GITHUB_TOKEN` fornecido pelo GitHub.

## Para Deploy no Vercel (Alternativa)

Se você preferir usar Vercel ao invés de GitHub Pages:

### 1. Obter Token da Vercel

1. Acesse [vercel.com/account/tokens](https://vercel.com/account/tokens)
2. Clique em **Create Token**
3. Dê um nome (ex: `GitHub Actions`)
4. Selecione o escopo desejado
5. Copie o token gerado

### 2. Configurar Secret no GitHub

1. Vá no seu repositório do GitHub
2. Acesse **Settings** > **Secrets and variables** > **Actions**
3. Clique em **New repository secret**
4. Nome: `VERCEL_TOKEN`
5. Value: Cole o token copiado
6. Clique em **Add secret**

### 3. Obter Project ID e Org ID da Vercel

```bash
# Instale o CLI da Vercel
npm i -g vercel

# Faça login
vercel login

# Vincule o projeto
vercel link

# Os IDs estarão no arquivo .vercel/project.json
```

### 4. Adicionar Secrets Adicionais

Adicione também no GitHub:
- `VERCEL_ORG_ID`: ID da sua organização Vercel
- `VERCEL_PROJECT_ID`: ID do projeto Vercel

### 5. Atualizar Workflow

Substitua o job de deploy no `.github/workflows/main.yml`:

```yaml
  deploy:
    name: Deploy no Vercel
    needs: ci
    if: github.event_name == 'push' && github.ref == 'refs/heads/main'
    runs-on: ubuntu-latest
    
    steps:
      - name: Checkout do código
        uses: actions/checkout@v4

      - name: Deploy no Vercel
        uses: amondnet/vercel-action@v25
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
          vercel-args: '--prod'
```

## Verificação

### GitHub Pages
- Acesse a aba **Actions** do GitHub
- Verifique se o workflow completou com sucesso
- O site estará em: `https://seu-usuario.github.io/blog-ebac`

### Vercel
- Acesse o [Dashboard da Vercel](https://vercel.com/dashboard)
- Veja os deploys em tempo real
- O site estará em: `https://seu-projeto.vercel.app`

## Troubleshooting

### Erro: "Resource not accessible by integration"
- Vá em **Settings** > **Actions** > **General**
- Em **Workflow permissions**, selecione **Read and write permissions**
- Marque **Allow GitHub Actions to create and approve pull requests**

### Erro: "GitHub Pages not found"
- Vá em **Settings** > **Pages**
- Selecione **Source**: **GitHub Actions**
- Aguarde alguns minutos após o primeiro deploy

### Erro no Lint
```bash
# Execute localmente para debugar
npm run lint

# Corrija automaticamente o que for possível
npm run lint -- --fix
```

## Boas Práticas

- ✅ Nunca commite secrets ou tokens no código
- ✅ Use sempre variáveis de ambiente
- ✅ Revogue tokens que não estiver usando
- ✅ Dê permissões mínimas necessárias aos tokens
- ✅ Monitore a aba Actions regularmente
