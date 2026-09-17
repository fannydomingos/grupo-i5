# Grupo i5 — site institucional

Site one-page do Grupo i5 que apresenta o grupo e direciona para os sites das
cinco empresas: **Incorp, Imob, Hotel, Stay e Cowork**.

Mesma stack do Smarter by i5 Stay: **Next.js 16 (App Router) + React 19 +
TypeScript + Tailwind CSS + Framer Motion + React Three Fiber (Three.js) +
Lenis** (scroll suave). Tipografia Outfit + Inter, paleta cinza-escuro
(`#121213`) com champagne (`#F3DEB6` / `#D8C298`; nas seções brancas, `#A98D5E`
para manter o contraste).

## Rodar localmente

```bash
npm install
npm run dev     # http://localhost:3000
```

> O projeto inclui um `.npmrc` com `legacy-peer-deps=true` — necessário porque o
> `@react-three/fiber` declara um peer opcional do Expo.

## Deploy na Vercel

1. Suba a pasta para um repositório no GitHub.
2. Na Vercel: **Add New → Project → Import** o repositório.
3. Framework detectado automaticamente (Next.js). Sem variáveis de ambiente.
4. Deploy.

## Onde editar o conteúdo

Quase tudo está em **`src/lib/site.ts`**:

| O que trocar | Onde |
| --- | --- |
| **URLs das empresas** | `brands[].href` — troque o `#` pela URL e mude `live: false` para `true` (isso troca o selo "Site em breve" pelo botão "Visitar ...") |
| Fundo de cada empresa | `brands[].theme` (`'light'` = branco, `'dark'` = preto) |
| Foto de cada empresa | `brands[].image` |
| Textos de cada empresa | `brands[].headline`, `body`, `bullets` |
| Anos da linha do tempo | `timeline[].year` (os vazios aparecem como "Capítulo 0X") |
| E-mail, WhatsApp, Instagram | `contact` |
| Número "+X" de realizações | `src/components/sections/Stats.tsx` (último item de `items`) |

Já apontam para sites reais: **Hotel** (`i5hotel.com.br`), **Cowork**
(`i5cowork.com.br`) e **Stay** (`smart-by-i5-site.vercel.app`). Faltam **Incorp**
e **Imob** — estão com `href: '#'` e `live: false` (selo "Site em breve").

### Imagens

Em `public/img/`: `incorp.jpg`, `hotel.jpg`, `stay.jpg` e `cowork.jpg` — são as
artes vetorizadas que vieram dentro da apresentação (PPTX/PDF), as únicas
imagens de conteúdo do site. A `incorp.jpg` também é o fundo da hero. A logo é
vetor puro (`src/components/Logo.tsx`), sem arquivo de imagem. Para trocar por fotos depois, basta substituir o arquivo
mantendo o nome, ou apontar outro caminho em `brands[].image`.

A **i5 Imob** é a única sem imagem na apresentação — o card usa um tratamento
gráfico com o wordmark. Para colocar uma, salve em `public/img/imob.jpg` e
descomente a linha `image:` dela em `src/lib/site.ts`.

Os ícones das cinco empresas estão em `public/img/icons/`, recortados da arte
oficial da marca. Entram como **máscara CSS** (`src/components/BrandIcon.tsx`),
então assumem a cor do tema e funcionam igual nas seções pretas e brancas.

### Logo

A marca é desenhada em SVG em `src/components/Logo.tsx` (menu e rodapé) — se
houver o SVG oficial da marca, é só substituir o conteúdo desse componente.

## Estrutura

```
src/
  app/            layout, page, estilos globais
  components/
    sections/     Hero, Manifesto, Thinking, Brands, Stats, Timeline, Closing
    motion/       Reveal, WordReveal, Counter, DrawIcon
    Nav, Section, SectionHead, BrandIcon
  lib/site.ts     conteúdo e links
public/img/       imagens
```

## Alternância preto / claro

Cada seção é envolvida pelo componente `Section` com `theme="dark"` ou
`theme="light"`, seguindo a apresentação: hero preto, manifesto claro, forma de
pensar preto, o grupo preto, **as cinco empresas em branco**, realizações
preto, história preto, rodapé preto. As cores vêm de variáveis CSS (`--bg`, `--fg`, `--accent`…) definidas em
`globals.css`, então trocar o tema de uma seção é mudar uma palavra.

## Seções

1. **Hero** — foto em tela cheia com zoom lento, headline com revelação palavra
   a palavra, parallax no scroll e a barra das cinco empresas (com os ícones)
   fixada na base, no mesmo formato do site do Smarter by i5 Stay.
2. **Manifesto** — "Sempre existe uma maneira melhor de fazer."
3. **Nossa forma de pensar** — Planejamos / Decidimos / Fazemos acontecer, cada
   um com um ícone que se desenha sozinho quando entra na tela.
4. **O Grupo** — visão geral das cinco empresas, seguida de uma seção por
   empresa (04 a 08), cada uma com card 3D (tilt no mouse) e CTA para o site.
5. **Realizações** — contadores animados e a faixa de números, no mesmo padrão de cards do site de referência.
6. **História** — linha do tempo 2007 → 2026 na horizontal: a seção trava na
   tela e a linha corre para o lado conforme você rola.
7. **Contato / rodapé** — atalhos para todas as empresas.

Acessibilidade: todo o motion respeita `prefers-reduced-motion`.
