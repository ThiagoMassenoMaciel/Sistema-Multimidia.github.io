import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="relative min-h-screen flex justify-center items-center">
      <div
        className="fixed inset-0 z-10 bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: "url(home.jpg)" }}
      ></div>

      <div className="relative flex flex-col max-w-md h-fit text-center rounded-2xl mx-4  z-12 items-center gap-6 p-4 bg-white/5 backdrop-blur-md border  border-white/30 shadow-xl text-white">
        <h2 className="text-2xl md:text-3xl font-bold text-white">
          Museu digital
        </h2>
        <p className=" text-sm sm:text-xl text-white">
          Onde a arte nunca dorme e é acessível em qualquer lugar sem limites.
        </p>
        <Link
          to="/galeria"
          className="px-3 py-2 bg-white/20 backdrop-blur-md border-2 border-white/40 text-white text-sm rounded-2xl hover:bg-white/30 transition"
        >
          Ver galeria de arte
        </Link>
      </div>
    </div>
  );
};

export default Home;
