# AMX Digital Group — Landing Page

Stack: **Next.js 15 · React · TypeScript · Tailwind CSS**

## 🚀 Deploy na Vercel (3 passos)

1. Faça upload deste projeto no GitHub
2. Acesse [vercel.com](https://vercel.com) → **New Project** → importe o repositório
3. Clique em **Deploy** — zero configuração necessária

---

## ✏️ Como atualizar o conteúdo do site

**Edite apenas um arquivo:**

```
app/data/site.ts
```

Esse arquivo centraliza **todo o conteúdo editável** da página:

| Seção | O que você pode mudar |
|---|---|
| `company` | Nome, domínio, WhatsApp, e-mail |
| `social` | Links de Instagram, LinkedIn, WhatsApp |
| `hero` | Título, subtítulo, badge, valores do orb e cards flutuantes |
| `stats` | Os 4 números da faixa de estatísticas |
| `services` | Títulos, descrições e número de cada serviço |
| `process` | Os 4 passos do processo |
| `cta` | Título, bullets e label do formulário final |
| `form` | Labels, placeholders e texto do botão |

### Exemplo — trocar um stat:
```ts
stats: [
  { value: "200+", label: "Clientes atendidos" },  // ← edite aqui
  ...
]
```

---

## 📦 Rodar localmente

```bash
npm install
npm run dev
# Acesse http://localhost:3000
```

## 🔌 Conectar o formulário ao seu CRM

No arquivo `app/components/LeadForm.tsx`, localize o comentário:

```ts
// TODO: conectar ao seu backend / CRM / Make / n8n
```

Substitua o `await new Promise(...)` pela chamada à sua API, webhook do Make/n8n, ou qualquer outro destino.
