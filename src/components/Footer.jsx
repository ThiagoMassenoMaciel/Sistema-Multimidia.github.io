import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import nomeSITE from "../assets/nomeSITE.png";
import { Link } from "react-router-dom";

// Registrar o plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);
  const imageRef = useRef(null);
  const [screenSize, setScreenSize] = useState(window.innerWidth);

  // Detectar mudanças no tamanho da tela
  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    // Configurações responsivas baseadas no tamanho da tela
    const getResponsiveConfig = () => {
      if (screenSize >= 640) {
        // Desktop/Tablet grande (640px+)
        return {
          scale: { from: 10, to: 0.9 },
          x: { from: "-100%", to: "0%" },
          scrub: 2,
          y: { from: 0, to: -50 },
          imageMaxWidth: "max-w-2xl",
        };
      } else if (screenSize >= 435) {
        // Tablet pequeno/Mobile grande (435px+)
        return {
          scale: { from: 10, to: 1 },
          x: { from: "-100%", to: "0%" },
          y: { from: 0, to: -50 },
          scrub: 1.5,
          imageMaxWidth: "max-w-xl",
        };
      } else {
        // Mobile pequeno (320px+)
        return {
          scale: { from: 5, to: 0.8 },
          x: { from: "-100%", to: "0%" },
          y: { from: 0, to: -50 },
          scrub: 2,
          imageMaxWidth: "max-w-sm",
        };
      }
    };

    const config = getResponsiveConfig();

    // Criar contexto GSAP para limpeza automática
    const ctx = gsap.context(() => {
      // Animação da imagem: aumenta tamanho e move horizontalmente
      gsap.fromTo(
        imageRef.current,
        {
          scale: config.scale.from,
          x: config.x.from,
        },
        {
          scale: config.scale.to,
          x: config.x.to,
          ease: "none",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top bottom",
            end: "center bottom",
            scrub: config.scrub,
            markers: false,
            invalidateOnRefresh: true, // Recalcula no resize
          },
        }
      );

      // Animação do menu: fade in quando aparecer
      gsap.fromTo(
        ".footer-menu",
        {
          opacity: 0,
          y: screenSize >= 640 ? -650 : -450,
        },
        {
          opacity: 1,
          y: 0,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: screenSize >= 640 ? "top 80%" : "top 90%",
            toggleActions: "play none none reverse",
            invalidateOnRefresh: true,
          },
        }
      );
    }, footerRef);

    // Cleanup quando componente desmontar
    return () => ctx.revert();
  }, [screenSize]);

  return (
    <footer
      ref={footerRef}
      className="relative h-[100vh] w-full bg-black text-white overflow-hidden z-12"
    >
      {/* Container da imagem com overflow hidden */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden px-4">
        <img
          ref={imageRef}
          src={nomeSITE}
          alt="imagem logo do site"
          className="w-full object-contain
            max-w-sm sm:max-w-2xl md:max-w-4xl"
          style={{ willChange: "transform" }}
        />
      </div>

      {/* Menu responsivo com z-index maior para ficar sobre a imagem */}
      <ul
        className="footer-menu absolute left-1/2 -translate-x-1/2 z-10
          bottom-6 sm:bottom-8 md:bottom-10
          flex flex-col sm:flex-row items-center
          gap-2 sm:gap-3 md:gap-4
          text-sm
          w-full px-4 sm:w-auto"
      >
        <li
          className="cursor-pointer rounded-md transition-all 
            hover:bg-white/40 hover:text-white backdrop-blur-sm  border border-white/20
            p-1.5 px-3 sm:p-2 sm:px-4
            w-full sm:w-auto text-center font-bold bg-gradient-to-r from-blue-700 to-teal-400 bg-clip-text text-transparent"
        >
          <Link to="/">Home</Link>
        </li>
        <li
          className="cursor-pointer rounded-md transition-all 
            hover:bg-white/80 hover:text-white backdrop-blur-sm  border border-white/20
            p-1.5 px-3 sm:p-2 sm:px-4 
            w-full sm:w-auto text-center font-bold bg-gradient-to-r from-blue-700 to-teal-800 bg-clip-text text-transparent"
        >
          <Link to="/galeria">Galeria de artes</Link>
        </li>
        <li
          className="cursor-pointer rounded-md transition-all 
            hover:bg-white/80 hover:text-white backdrop-blur-sm border border-white/20
            p-1.5 px-3 sm:p-2 sm:px-4
            w-full sm:w-auto text-center font-bold bg-gradient-to-r from-blue-700 to-teal-800 bg-clip-text text-transparent"
        >
          <Link to="/museus">Museus</Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
