# A2Max Bio — Arquitetura

## Produto

**A2Max Bio** — Social Hub mobile-first da A2Max.

## Domínio Planejado

`bio.a2max.com.br`

## Objetivo

Social Hub mobile-first da A2Max, funcionando como microexperiência institucional, camada de direcionamento e futura camada de mensuração.

## Princípio

Não é apenas uma árvore de links.

## Experiência

- **Mobile-first** — prioridade absoluta.
- **Desktop** mantém experiência visual mobile centralizada (não é landing page desktop tradicional).

---

## Rotas Planejadas

| Rota | Conteúdo | Tema |
|---|---|---|
| `/` | Hub principal | Dark Mode |
| `/action` | Visão geral A.C.T.I.O.N. | Dark Mode |
| `/action/a` | Auditoria e Análise | White Mode |
| `/action/c` | Construção da Estrutura | White Mode |
| `/action/t` | Tráfego e Tração | White Mode |
| `/action/i` | Inteligência de Dados | White Mode |
| `/action/o` | Otimização Contínua | White Mode |
| `/action/n` | Novo Ciclo / Next Step | White Mode |

---

## Regra Visual A.C.T.I.O.N.

Representação visual do ciclo:

```
A → C → T → I → O → N → …
```

**NUNCA** representar visualmente:

```
A → C → T → I → O → N → A
```

Após `N`, usar reticências (`…`) para indicar evolução contínua.

---

## Tracking Planejado

A arquitetura deverá posteriormente suportar:

- `page_view`
- CTA clicks
- Outbound clicks
- Referrer
- UTMs (`utm_source`, `utm_medium`, `utm_campaign`, `utm_content`, `utm_term`)
- Campaign attribution
- Conversion events
- GA4
- Futura integração CRM/BI

> **Não implementar nesta fase.** Tracking será tratado como parte da arquitetura, não como remendo posterior.

---

## Fontes de Verdade

Documentos oficiais localizados em `E:\dev\A2 Max\references\a2max-bio` (somente leitura):

| Arquivo | Tipo |
|---|---|
| `A2MAX_BRAND_E_POSICIONAMENTO_v1.0.pdf` | Identidade / Brand |
| `MÉTODO A.C.T.I.O.N..pdf` | Método A.C.T.I.O.N. |
| `O QUE O MÉTODO A.C.T.I.O.N. NÃO É.pdf` | Método A.C.T.I.O.N. |

Esses documentos NÃO devem ser copiados para `public/`.

---

## Identidade

A logo oficial A2Max é utilizada exclusivamente a partir dos assets oficiais fornecidos:

- `public/brand/a2max-logo-light.png` — fundo transparente
- `public/brand/a2max-logo-dark.png` — versão dark mode

### Regra Dura

A logo oficial **nunca** poderá ser recriada por:

- Texto HTML
- CSS
- SVG improvisado
- Fonte aproximada
- Imagem gerada por IA

---

## Stack

| Camada | Tecnologia |
|---|---|
| Framework | Next.js (App Router) |
| Linguagem | TypeScript |
| Styling | Tailwind CSS |
| Package Manager | pnpm |
| Deploy | Vercel (planejado) |
| Repositório | GitHub (`A2Max-Business/a2max-bio`) |
