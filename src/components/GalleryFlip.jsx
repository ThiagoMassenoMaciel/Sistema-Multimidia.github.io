import React, { useState, useEffect, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { Flip } from "gsap/Flip";
import ArticleCard from "./ArticleCard";
import "../styles/gallery.css";

import data from "../baseJS/json.js";

// Registrar o plugin FLIP
gsap.registerPlugin(Flip);

const GalleryFlip = () => {
  /*
  const [articless, setArticless] = useState([
    {
      id: 1,
      title: "Dearest Diary",
      description:
        "Ginger is a flowering plant whose rhizome, ginger root or ginger, is widely used as a spice and a folk medicine.",
      image:
        "https://images.unsplash.com/photo-1429087969512-1e85aab2683d?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MDc5NDgwMA&ixlib=rb-1.2.1&q=85&w=600",
      name_museum: "Museu do Prado",
      image_museum: [
        "https://i1.wp.com/turismo.eurodicas.com.br/wp-content/uploads/2019/08/ingresso-museu-do-prado.jpg?resize=1200%2C856&ssl=1",
        "https://www.flipar.com.br/wp-content/uploads/2024/11/Museu-do-Padro-5_Easy-Resize.com_.jpg?20241119092702",
        "https://tr1.traventia.com/migrated/imghash/0b887579760ffcd6994e007ed1a3e681.jpg",
        "https://tr1.traventia.com/migrated/imghash/41a3e792f7e8351ceeec2a1d7775af53.jpg",
      ],
      artista: "Vincent van Gogh",
    },
    {
      id: 2,
      title: "Window Sill?",
      description:
        "Ginger is a flowering plant whose rhizome, ginger root or ginger, is widely used as a spice and a folk medicine.",
      image:
        "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74321/fbanijhrol4-annie-spratt-776x951.jpg",
      name_museum: "Museu de Arte Moderna",
      artista: "Pablo Picasso",
    },
    {
      id: 3,
      title: "Listen To Me",
      description:
        "Ginger is a flowering plant whose rhizome, ginger root or ginger, is widely used as a spice and a folk medicine.",
      image:
        "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74321/2rm8p0rkxiw-marius-masalar-776x582.jpg",
      name_museum: "Museu Nacional de Belas Artes",
      artista: "Leonardo da Vinci",
    },
    {
      id: 4,
      title: "Travel Often",
      description:
        "Ginger is a flowering plant whose rhizome, ginger root or ginger, is widely used as a spice and a folk medicine.",
      image:
        "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74321/71nlan-2ya-andrew-neel-2-776x620.jpg",
      name_museum: "Museum of Modern Art",
      artista: "Claude Monet",
    },
    {
      id: 5,
      title: "Another Plant?",
      description:
        "Ginger is a flowering plant whose rhizome, ginger root or ginger, is widely used as a spice and a folk medicine.",
      image:
        "https://images.unsplash.com/photo-1483794344563-d27a8d18014e?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MDg2NDUzOA&ixlib=rb-1.2.1&q=85&w=600",
      name_museum: "Museu do Louvre",
      artista: "Rembrandt van Rijn",
    },
    {
      id: 6,
      title: "On the Wave",
      description:
        "Ginger is a flowering plant whose rhizome, ginger root or ginger, is widely used as a spice and a folk medicine.",
      image:
        "https://images.unsplash.com/photo-1557180295-76eee20ae8aa?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MDc5NDc2Mw&ixlib=rb-1.2.1&q=85&w=600",
      name_museum: "Museu Metropolitano de Arte",
      artista: "Salvador Dalí",
    },
    {
      id: 7,
      title: "Great Gatsby",
      description:
        "Ginger is a flowering plant whose rhizome, ginger root or ginger, is widely used as a spice and a folk medicine.",
      image:
        "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74321/typewriter-1-776x968.jpg",
      name_museum: "Tate Modern",
      artista: "F. Scott Fitzgerald",
    },
    {
      id: 8,
      title: "In the Sun",
      description:
        "Ginger is a flowering plant whose rhizome, ginger root or ginger, is widely used as a spice and a folk medicine.",
      image:
        "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74321/xohlruw4k8-christelle-bourgeois-776x758.jpg",
      name_museum: "Museu Galeria Uffizi",
      artista: "Ernest Hemingway",
    },
  ]);
*/
  const [articles, setArticles] = useState(data[0]);
  const [detailsId, setDetailsId] = useState(null);
  const containerRef = useRef(null);
  const mainRef = useRef(null);

  // Animação de entrada ao carregar
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(mainRef.current, {
        autoAlpha: 1,
        duration: 0.4,
        onComplete: () => {
          mainRef.current.classList.add("loaded");
        },
      });
      gsap.from(".gallery-article", {
        autoAlpha: 0,
        yPercent: 30,
        stagger: 0.04,
        duration: 0.6,
      });
    });

    return () => ctx.revert();
  }, []);

  // Função para expandir artigo
  const handleArticleClick = (id) => {
    if (detailsId === id) return;

    // Animar saída dos detalhes anteriores ANTES do FLIP
    gsap.to(".details-view", {
      opacity: 0,
      y: "100%",
      duration: 0.3,
    });

    gsap.to(".gallery-article", {
      "--max": 0,
      duration: 0.3,
    });

    // Usar requestAnimationFrame para garantir que a animação acima complete
    requestAnimationFrame(() => {
      // Capturar estado atual com FLIP
      const state = Flip.getState(".gallery-article");

      // Mudar o estado
      setDetailsId(id);

      // Usar requestAnimationFrame novamente para garantir que o React renderizou
      requestAnimationFrame(() => {
        // Animar com FLIP - ABSOLUTE: FALSE para manter no fluxo
        Flip.from(state, {
          duration: 0.8,
          ease: "power2.inOut",
          absolute: false, // MUDANÇA CRÍTICA: mantém elementos no fluxo do documento
          scale: true,
          simple: true,
          onStart: () => {
            // Animar variável CSS --max do novo card expandido
            gsap.to(".gallery-article.details", {
              "--max": 1,
              duration: 0.8,
            });
          },
          onComplete: () => {
            // Animar entrada dos novos detalhes
            gsap.to(".details .details-view", {
              opacity: 1,
              y: 0,
              duration: 0.5,
              delay: 0.1,
            });
          },
        });
      });
    });
  };

  // Função para mover para o topo
  const handleMoveToTop = (id) => {
    const state = Flip.getState(".gallery-article, .details-view");

    setArticles((prev) => {
      const article = prev.find((a) => a.id === id);
      const others = prev.filter((a) => a.id !== id);
      return [article, ...others];
    });

    requestAnimationFrame(() => {
      Flip.from(state, {
        duration: 0.8,
        ease: "power2.inOut",
        absolute: false,
        scale: true,
      });
    });
  };

  return (
    <>
      {/*
      <main
      ref={mainRef}
      className="gallery-main w-full p-4 pt-15 sm:pt-17 lg:pt-25 sm:p-6 lg:p-8 bg-gradient-to-b from-[#40E0D0] via-[#EE82EE] to-[#000]"
    >
  */}
      <main
        ref={mainRef}
        className="gallery-main w-full px-3 pb-[300px] pt-25 md:px- bg-white/25 shadow-lg"
      >
        <div
          ref={containerRef}
          className="gallery-container grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 relative z-12"
          style={{ gridAutoRows: "minmax(16rem, max-content)" }}
        >
          {console.log(articles)}
          {articles.exposicao_artistas.map((artista, idx) =>
            artista.obras.map((obra, obraIdx) => (
              <ArticleCard
                key={`${articles.id}-${artista.id}-${obraIdx}`}
                article={{
                  ...obra,
                  name_museum: articles.nome_museum,
                  artista: artista.nome_artista,
                }}
                index={obraIdx}
                isDetails={detailsId === obra.id}
                onClick={() => handleArticleClick(obra.id)}
                onMoveToTop={() => handleMoveToTop(obra.id)}
              />
            ))
          )}
        </div>
      </main>
    </>
  );
};

export default GalleryFlip;
