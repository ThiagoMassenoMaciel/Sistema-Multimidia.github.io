# MuseOnline

![logo](./src/assets/nomeSITE.png)

## Sistema Multimídia de Arte Digital

**Desenvolvedor:** Thiago Masseno Maciel
**Tech Stack:** React 19 + Vite + Tailwind CSS v4 + GSAP

---

# 🎯 Visão Geral

**MuseOnline** é uma aplicação web imersiva "onde a arte nunca dorme". O projeto visa criar uma galeria digital interativa que organiza museus, artistas e suas obras de forma fluida.

### Destaques do Projeto:

- **Navegação SPA:** Transições sem recarregamento de página.
- **Animações Complexas:** Uso intensivo de GSAP para efeitos de "Flip" e Scroll.
- **Design Moderno:** Estética "Glassmorphism" (efeito de vidro) e responsividade.

---

# 🛠️ Tecnologias & Ferramentas

O projeto utiliza o que há de mais moderno no ecossistema Frontend:

- **Core:** React `^19.2.0` (Versão mais recente)
- **Build:** Vite `^7.2.4`
- **Estilização:** Tailwind CSS `^4.1.17` (Versão 4 alpha/beta, cutting edge)
- **Animações:** \* `gsap` (GreenSock Animation Platform)
  - `Flip` plugin (para transições de layout)
  - `ScrollTrigger` (para animações baseadas em rolagem)
- **Ícones:** FontAwesome
- **Roteamento:** React Router DOM v7

---

# 📂 Arquitetura do Projeto

Estrutura organizada para escalabilidade (`src/`):

```bash
src/
├── assets/          # Imagens (bgNavBar.png, nomeSITE.png, etc)
├── baseJS/          # "Banco de dados" estático (json.js, modelJSON.js)
├── components/      # Componentes Reutilizáveis
│   ├── ArticleCard.jsx  # Card individual da obra
│   ├── GalleryFlip.jsx  # Lógica principal da animação
│   ├── Header.jsx & Footer.jsx
├── pages/           # Rotas (Home, Galeria, Museus, ObraArtistica)
├── styles/          # CSS customizado (gallery.css)
└── utils/           # Utilitários (createSlug.js)
```

# 💻 Destaque: Lógica de Animação (GSAP Flip)

O coração da galeria reside no componente `GalleryFlip.jsx`. A técnica **FLIP** permite expandir um card para tela cheia suavemente.

```javascript
// src/components/GalleryFlip.jsx
const handleArticleClick = (id) => {
  const state = Flip.getState(".gallery-article"); // Captura estado inicial

  setDetailsId(id); // React atualiza o DOM

  // GSAP anima a transição entre o estado antigo e o novo
  requestAnimationFrame(() => {
    Flip.from(state, {
      duration: 0.8,
      ease: "power2.inOut",
      absolute: false,
      scale: true,
      onStart: () => {
        gsap.to(".gallery-article.details", { "--max": 1 });
      },
    });
  });
};
```

# 🎨 UI/UX: Glassmorphism & Tailwind

O design utiliza amplamente fundos translúcidos para criar profundidade, aplicado via classes utilitárias do Tailwind e CSS modules.

##### Exemplo no Header (`src/components/Header.jsx`):

```
<header className="... bg-white/5 backdrop-blur-md border border-white/30 shadow-lg ...">
```

##### Exemplo no CSS (`src/styles/gallery.css`):

```
/* Gradiente dinâmico sobre as obras */
.article-description {
  background: linear-gradient(
    0deg,
    hsl(var(--overlayH), var(--overlayS), var(--overlayL), calc(1 * var(--max))) 0%,
    /* ...gradiente complexo... */
    hsla(var(--overlayH), var(--overlayS), var(--overlayL), 0) 100%
  );
}

```

# 📱 Responsividade e Scroll Trigger

O rodapé (`Footer.jsx`) possui uma lógica inteligente que detecta o tamanho da tela para ajustar a animação de entrada do logo:

```
// src/components/Footer.jsx
const getResponsiveConfig = () => {
  if (screenSize >= 640) { // Desktop
    return { scale: { from: 10, to: 0.9 }, scrub: 2 };
  } else { // Mobile
    return { scale: { from: 5, to: 0.8 }, scrub: 2 };
  }
};

gsap.fromTo(imageRef.current, config.from, {
  ...config.to,
  scrollTrigger: { trigger: footerRef.current, scrub: config.scrub }
});
```

# 💾 Gestão de Dados

Atualmente, o sistema utiliza um arquivo JSON estruturado (src/baseJS/json.js) para alimentar a aplicação, simulando uma API.

### Estrutura de Dados:

###### Museu (ID, Nome, Cidade, Imagens)

###### Artistas (Nome, Mídia)

###### Obras (Título, Imagens, Vídeos, Textos descritivos)

## **Isso permite renderização dinâmica através de `map()` no React:**

```
{dataWithSlugs.map((museum) => (
        <div key={museum.id} className="mb-8 border-b pb-4">
          {/* Note o novo campo slug_museum sendo usado no Link */}
          <h2 className="text-2xl font-bold">
            <a href={`/museu/${museum.slug_museum}`}>{museum.nome_museum}</a>
          </h2>
          <p className="text-gray-500 text-sm">
            Slug gerado: {museum.slug_museum}
          </p>

          <div className="ml-4 mt-2">
            <h3 className="font-semibold">Artistas:</h3>
            {museum.exposicao_artistas.map((artista) => (
              <div key={artista.id} className="ml-4">
                {/* Novo campo slug_artista */}
                <p>
                  Nome: {artista.nome_artista} (Slug: {artista.slug_artista})
                </p>

                <ul className="list-disc ml-6 mt-1 text-sm">
                  {artista.obras.map((obra) => (
                    <li key={obra.id}>
                      {/* Novo campo slug_obra */}
                      Obra: {obra.nome_obra[0]}
                      <br />
                      <span className="text-blue-600">
                        URL Slug: /obra/{obra.slug_obra}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      ))}
```

# 🚀 Desafios e Soluções

#### Animação de Layout (FLIP)

#### **Desafio**: Mover um elemento do grid para destaque sem quebrar o layout.

✅ Solução: Uso do Flip.getState e absolute: false no GSAP para manter o fluxo do documento.

Performance
✅ Solução: Uso de will-change: transform no CSS e requestAnimationFrame no React para garantir 60fps.

Compatibilidade Tailwind v4
✅ Solução: Configuração limpa via @import "tailwindcss"; no index.css e plugin Vite.

# Tools

#### React js

#### Tailwinds css

#### Three js

#### GSAP

###### [effect letters,](https://codepen.io/Nekto/pen/yLPVeWL) [ grid layout, ](https://codepen.io/pehaa/pen/YzreJZG) [scroll nav bar, ](https://webflow.com/made-in-webflow/website/minimal-goods) [Flip animation to scroll, ](https://codepen.io/GreenSock/pen/JjVPyxd) [scroll da página museu](https://codepen.io/supah/pen/xxJMbbg) [scroll horizontal](https://codepen.io/cameronknight/pen/qBNvrRQ)

#### CodeRabbit

[Tutorial](https://youtu.be/DEeaT6FxEws?si=7TE4H15qIVJ_ul84)

# Sites que aplicam GSAP lindos

##### [gta 2026 VI ](https://www.rockstargames.com/VI)

# conta do neon : db postgreSQL serveless

```
conta de email usado : eestudarti@gmail.com

nome do projeto : museonline
versão postgress : 17

nome do banco de dados : museonline
orner


```

# tempo desenvolvendo o projeto

### front-end

```
5h procurando referência

07-12-2025
  15h   até 19h ------ 4h
  22:20 até 00:00 ---- 1h40

08-12-2025
  00:00 até 04:00 ---- 4h

  18:00 até 22:00 ---- 4h

  23:30 até 06:00 ---- 6h30 aqui vou so ou estruturando como vai ser o json para eu conseguir construir o front-end

  11:26 até 11:42 ----

  16:40 até 20:00 ---- 3h20

  21:50 até 02:00 ---- 4h

  13:34 até 14:34 ---- 1h

  15:22 até 15:45 ---- 23'
```
