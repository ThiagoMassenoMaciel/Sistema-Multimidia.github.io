import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { useState } from "react";

import bgNavBar from "../assets/bgNavBar.png";
import nomeSITE from "../assets/nomeSITE.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const [showModal, setShowModal] = useState(false); // Novo estado para modal

  const exibirFormularioNoModal = () => {
    setShowModal(true); // Abre o modal
  };

  const AfterClicked = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 z-50 flex w-full items-center justify-between bg-white  text-white px-[24px] py-1 drop-shadow-md md:px-[34px] lg:px-[44px] bg-white/5 backdrop-blur-md border border-white/30 shadow-lg scale-95 rounded-3xl mt-4 mx-auto mb-4`}
      >
        <Link to="/" className="no-underline">
          <img
            src={nomeSITE}
            alt="logo"
            className="transition-all hover:scale-105 h-[25px] sm:h-[40px] object-contain"
          />
        </Link>

        <ul className="hidden items-center gap-4 text-base md:flex">
          <li className="cursor-pointer rounded-[10px] p-1 bg-transparent transition-all hover:bg-white/20 hover:border hover:border-white hover:text-white">
            <Link onClick={() => AfterClicked()} to="/">
              Home
            </Link>
          </li>
          <li className="cursor-pointer rounded-[10px] p-1 bg-transparent transition-all hover:bg-white/20 hover:border hover:border-white hover:text-white">
            <Link onClick={() => AfterClicked()} to="/galeria">
              Galeria de artes
            </Link>
          </li>
          <li className="cursor-pointer rounded-[10px] p-1 bg-transparent transition-all hover:bg-white/20 hover:border hover:border-white hover:text-white">
            <Link onClick={() => AfterClicked()} to="/museus">
              Museus
            </Link>
          </li>
        </ul>

        {/*rounded-md*/}
        <button
          className=" p-0 px-1 text-white hover:bg-white/2 rounded-[10px] bg-white/20 backdrop-blur-md border border-white/30 shadow-lg"
          onClick={() => exibirFormularioNoModal()}
        >
          Contato
        </button>

        <div className="cursor pointer flex items-center justify-center text-center text-5xl md:hidden ">
          {/* Icons for mobile menu toggle */}

          {isMenuOpen ? (
            <FontAwesomeIcon
              icon={faXmark}
              className="cursor-pointer text-[30px]"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            />
          ) : (
            <FontAwesomeIcon
              icon={faBars}
              className="cursor-pointer text-[30px]"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            />
          )}
        </div>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <ul className="absolute top-16 left-0 flex w-full flex-col items-center gap-4 bg-[rgb(169,155,138)]/90  border border-white/30 shadow-lg py-4 md:hidden">
            <li className="cursor-pointer rounded-md p-1 transition-all hover:bg-white/20 hover:text-white  bg-white/5 backdrop-blur-md border border-white/30 shadow-lg">
              <Link onClick={() => AfterClicked()} to="/">
                <span className=" font-bold bg-gradient-to-r from-blue-700 to-teal-400 bg-clip-text text-transparent">
                  Home
                </span>
              </Link>
            </li>
            <li className="cursor-pointer rounded-md p-1 transition-all hover:bg-white/20 hover:text-white  bg-white/5 backdrop-blur-md border border-white/30 shadow-lg">
              <Link onClick={() => AfterClicked()} to="/galeria">
                <span className=" font-bold bg-gradient-to-r from-blue-700 to-teal-400 bg-clip-text text-transparent">
                  Galeria de artes
                </span>
              </Link>
            </li>
            <li className="cursor-pointer rounded-md p-1 transition-all hover:bg-white/20 hover:text-white  bg-white/5 backdrop-blur-md border border-white/30 shadow-lg">
              <Link onClick={() => AfterClicked()} to="/museus">
                <span className=" font-bold bg-gradient-to-r from-blue-700 to-teal-400 bg-clip-text text-transparent">
                  Museus
                </span>
              </Link>
            </li>
          </ul>
        )}
      </header>
    </>
  );
};

export default Header;
