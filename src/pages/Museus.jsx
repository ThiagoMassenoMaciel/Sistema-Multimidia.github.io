import React from "react";
//import home from "../assets/home.jpg";
import { Link } from "react-router-dom";

const Museus = () => {
  return (
    <>
      {/* Fundo com a imagem cobrindo toda a tela, sem distorcer */}
      <div
        className="fixed inset-0 z-10 bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: "url(home.jpg)" }}
      ></div>

      {/* Conteúdo centralizado por cima do fundo */}
      <section className="relative z-12 min-h-screen flex items-center justify-center px-4">
        <div className="max-w-md w-full text-center p-8 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight">
            Todos os Museus em um só lugar
          </h2>
          <p className="text-white/90 text-lg mb-8 leading-relaxed">
            Cada museu tem uma história para contar, descubra qual vai te
            inspirar hoje
          </p>
        </div>
      </section>
      <main></main>
    </>
  );
};

export default Museus;
