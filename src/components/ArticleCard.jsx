import React from "react";
import { Link } from "react-router-dom";

const ArticleCard = ({ article, index, isDetails, onClick, onMoveToTop }) => {
  return (
    <article
      className={`gallery-article article-${index + 1} ${
        isDetails ? "details" : ""
      } cursor-pointer rounded-2xl shadow-lg`}
      onClick={onClick}
    >
      <a href="#" onClick={(e) => e.preventDefault()}>
        <img href={article.url_imagens.url_img_obra} alt={article.title} />
      </a>

      <section className="article-description">
        <h2 className="text-sm md:text-base font-serif my-1 font-normal text-black/90 py-1 px-2 rounded-3xl  bg-white/20 backdrop-blur-md border border-white/30 shadow-lg w-fit">
          {article.nome_obra}
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
            {article.name_museum}
          </h2>

          <h2 className="text-sm md:text-base font-serif my-1 font-normal text-black/90 py-1 px-2 rounded-3xl  bg-white/20 backdrop-blur-md border border-white/30 shadow-lg w-fit">
            {article.artista}
          </h2>
        </div>
        <div className="details-view">
          <p className="text-white/60 text-sm md:text-base my-2 leading-relaxed ">
            {article.bloco_texto[0]}
          </p>

          {isDetails && (
            <div className="flex gap-2 w-fit h-fit">
              <Link
                className=" text-white uppercase text-sm transition-colors py-1 px-2 rounded-3xl  bg-white/20 backdrop-blur-md border border-white/30 shadow-lg w-fit"
                to={`/obra_artistica/${article.id}`}
              >
                ver obra
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
