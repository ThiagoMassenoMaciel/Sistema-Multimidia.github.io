import React from "react";
import { Link } from "react-router-dom";
import Museu from "../pages/Museu";

const ArticleCard = ({
  id_obra,
  nome_museum,
  nome_artista,
  nome_obra,
  url_img_obra,
  bloco_texto,
  index,
  isDetails,
  onClick,
  onMoveToTop,
}) => {
  return (
    <article
      className={`gallery-article article-${index + 1} ${
        isDetails ? "details" : ""
      } cursor-pointer rounded-2xl shadow-lg`}
      onClick={onClick}
    >
      {console.log(
        "o que veio como prop\n",
        nome_museum,
        "\n",
        url_img_obra,
        "\n"
      )}
      <a href="#" onClick={(e) => e.preventDefault()}>
        <img src={`url(${url_img_obra})`} alt={`${nome_museum}--${id_obra}`} />
      </a>

      <section className="article-description">
        <h2 className="text-sm md:text-base font-serif my-1 font-normal text-black/90 py-1 px-2 rounded-3xl  bg-white/20 backdrop-blur-md border border-white/30 shadow-lg w-fit">
          {nome_obra}
        </h2>
        <div
          id="metaDADOarticle"
          className={
            isDetails
              ? `flex flex-row gap-1`
              : `hidden sm:flex sm:flex-col sm:gap-px`
          }
        >
          <h2 className="text-sm md:text-base font-serif my-1 font-normal text-black/90 py-1 px-2 rounded-3xl  bg-white/20 backdrop-blur-md border border-white/30 shadow-lg w-fit">
            {nome_museum}
          </h2>

          <h2 className="text-sm md:text-base font-serif my-1 font-normal text-black/90 py-1 px-2 rounded-3xl  bg-white/20 backdrop-blur-md border border-white/30 shadow-lg w-fit">
            {nome_artista}
          </h2>
        </div>
        <div className="details-view">
          <p className="text-white/60 text-sm md:text-base my-2 leading-relaxed ">
            {bloco_texto}
          </p>

          {isDetails && (
            <div className="flex gap-2 w-fit h-fit">
              <Link
                className=" text-white uppercase text-sm transition-colors py-1 px-2 rounded-3xl  bg-white/20 backdrop-blur-md border border-white/30 shadow-lg w-fit"
                to={`/obra_artistica/${id_obra}`}
              >
                Ver obra
              </Link>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onMoveToTop();
                }}
                className=" text-white uppercase text-sm transition-colors py-1 px-2 rounded-3xl  bg-white/20 backdrop-blur-md border border-white/30 shadow-lg w-fit"
              >
                Mover para o topo
              </button>
            </div>
          )}
        </div>
      </section>
    </article>
  );
};

export default ArticleCard;
