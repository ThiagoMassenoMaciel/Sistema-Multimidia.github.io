import React from "react";
import GalleryFlip from "../components/GalleryFlip";
import Exemplo from "../components/exemplo";

//import home from "../assets/home.jpg";

const Galeria = () => {
  return (
    <>
      {/*
      <div class="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-500 via-pink-500 to-red-500">
        <div class="max-w-sm w-full p-6 rounded-xl bg-white/20 backdrop-blur-md border border-white/30 shadow-lg">
          <h2 class="text-2xl font-bold text-white mb-2">Galeria</h2>
          <p class="text-white/80 mb-4">
            Onde a arte nunca dorme e acessível em qualquer lugar sem limites.
          </p>
          <button class="px-4 py-2 bg-white/30 hover:bg-white/40 text-white font-semibold rounded-lg transition">
            Ver galeria de arte
          </button>
        </div>
      </div>*/}
      <div
        className="fixed inset-0 z-10 bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: "url(home.jpg)" }}
      ></div>
      

      <GalleryFlip />
    </>
  );
};

export default Galeria;
