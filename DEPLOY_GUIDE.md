# 🚀 Guia de Deploy - Passo a Passo

## ✅ Configuração Concluída

Seu projeto está pronto para CI/CD! Aqui está o que foi configurado:

### Arquivos Criados/Modificados:

1. **`.github/workflows/main.yml`** - Pipeline de CI/CD
2. **`next.config.ts`** - Configuração para export estático
3. **`package.json`** - Scripts de lint e test atualizados
4. **`README.md`** - Documentação completa
5. **`SECRETS_CONFIG.md`** - Guia de configuração de secrets (opcional)

---

## 📋 Próximos Passos

### 1. Commitar as Alterações

```bash
git add .
git commit -m "feat: Configurar CI/CD com GitHub Actions"
```

### 2. Fazer Push para o GitHub

```bash
# Se ainda não criou o repositório remoto:
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/blog-ebac.git
git push -u origin main

# Se já existe:
git push origin main
```

### 3. Configurar GitHub Pages

1. Vá no seu repositório: `https://github.com/SEU-USUARIO/blog-ebac`
2. Clique em **Settings** (⚙️ Configurações)
3. No menu lateral, clique em **Pages**
4. Em **Source**, selecione: **GitHub Actions**
5. Salve as configurações

### 4. Ajustar basePath (se necessário)

Se seu repositório não se chamar `blog-ebac`, você precisa ajustar o `basePath`:

**Abra `next.config.ts` e descomente/ajuste:**

```typescript
const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/nome-do-seu-repositorio', // ← Descomente esta linha
};
```

> ⚠️ **Importante:** O basePath deve ser `/nome-do-repositorio` (com barra no início, sem barra no final)

### 5. Habilitar Permissões do Workflow

Se encontrar erro de permissão:

1. Vá em **Settings** > **Actions** > **General**
2. Em **Workflow permissions**, selecione:
   - ✅ **Read and write permissions**
3. Marque: ✅ **Allow GitHub Actions to create and approve pull requests**
4. Clique em **Save**

---

## 🔍 Verificar o Deploy

### Acompanhar o Workflow

1. Vá na aba **Actions** do GitHub
2. Você verá o workflow "CI/CD Pipeline" executando
3. Clique nele para ver os logs detalhados

### Estágios do Workflow:

1. **CI (Integração Contínua)**
   - ✅ Instalar dependências
   - ✅ Rodar ESLint
   - ✅ Rodar testes
   - ✅ Build da aplicação

2. **Deploy (Entrega Contínua)**
   - ✅ Upload dos arquivos
   - ✅ Deploy no GitHub Pages

### Acessar o Site

Após o workflow completar (leva ~2-5 minutos):

**URL:** `https://SEU-USUARIO.github.io/blog-ebac`

> Substitua `SEU-USUARIO` pelo seu nome de usuário do GitHub

---

## 🛠️ Comandos Úteis

### Testar Localmente

```bash
# Desenvolvimento
npm run dev

# Lint
npm run lint

# Build
npm run build

# Testar o build estático
npx serve out
```

### Forçar Novo Deploy

```bash
git commit --allow-empty -m "trigger: Force redeploy"
git push origin main
```

---

## 🐛 Troubleshooting

### ❌ Erro: "Process completed with exit code 1"

**Causa:** Lint ou build falharam

**Solução:**
```bash
# Rode localmente para ver os erros
npm run lint
npm run build

# Corrija os erros e faça commit novamente
```

### ❌ Erro: "Resource not accessible by integration"

**Causa:** Permissões do workflow não configuradas

**Solução:** Siga o passo 5 acima (Habilitar Permissões)

### ❌ Página 404 ao acessar artigos

**Causa:** `basePath` não configurado corretamente

**Solução:** 
1. Verifique o nome do repositório
2. Ajuste o `basePath` no `next.config.ts`
3. Faça commit e push novamente

### ❌ Site não carrega/CSS não aplica

**Causa:** Caminho de assets incorreto

**Solução:**
1. Verifique se `output: 'export'` está em `next.config.ts`
2. Confirme que `images.unoptimized: true` está configurado
3. Limpe o cache: `rm -rf .next out` e faça novo build

---

## 📊 Monitoramento

### Badges

Adicione ao README para mostrar status:

```markdown
[![CI/CD Pipeline](https://github.com/SEU-USUARIO/blog-ebac/actions/workflows/main.yml/badge.svg)](https://github.com/SEU-USUARIO/blog-ebac/actions/workflows/main.yml)
```

### Logs

- **Actions Tab:** Ver histórico completo
- **Workflow runs:** Detalhes de cada execução
- **Artifacts:** Downloads de builds (se necessário)

---

## 🎯 Próximas Melhorias (Opcional)

- [ ] Adicionar testes unitários com Jest
- [ ] Configurar Lighthouse CI para métricas de performance
- [ ] Adicionar cache de dependências
- [ ] Configurar notificações de deploy (Discord/Slack)
- [ ] Implementar preview deploys em PRs
- [ ] Adicionar análise de bundle size

---

## ✅ Checklist Final

Antes de submeter o projeto:

- [ ] ✅ Código commitado e pushed para GitHub
- [ ] ✅ GitHub Pages configurado (Source: GitHub Actions)
- [ ] ✅ Workflow executado com sucesso na aba Actions
- [ ] ✅ Site acessível na URL do GitHub Pages
- [ ] ✅ README.md atualizado com link do site
- [ ] ✅ Badge de status do workflow adicionado
- [ ] ✅ Testado navegação entre páginas
- [ ] ✅ Verificado responsividade

---

## 🎓 Recursos de Aprendizado

- [GitHub Actions Docs](https://docs.github.com/en/actions)
- [Next.js Static Exports](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
- [GitHub Pages](https://docs.github.com/en/pages)

---

**🎉 Parabéns! Seu projeto está pronto para ser avaliado!**

Lembre-se de compartilhar o link do repositório GitHub na plataforma EBAC.
