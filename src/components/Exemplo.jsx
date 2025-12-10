import { dataWithSlugs } from "./dataWithSlugs.jsx";

//EXEMPLO DE USO DOS DADOS COM SLUGS GERADOS PRA PAGINA DE MUSEU
export default function Exemplo() {
  // Vamos ver no console como ficou a estrutura
  console.log(dataWithSlugs);

  return (
    <div className="p-4 relative z-12 max-w-[500px] text-center bg-white/5 backdrop-blur-md border  border-white/30 shadow-xl">
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
    </div>
  );
}
