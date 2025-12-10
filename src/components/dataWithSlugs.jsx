import originalData from "../baseJS/json.js"; // Importa seu arquivo original
import { createSlug } from "../utils/createSlug.js";

// Função que recebe os dados brutos e retorna os dados enriquecidos com slugs
const addSlugsToData = (data) => {
  return data.map((museum) => {
    // 1. Gera slug do Museu
    const museumSlug = createSlug(museum.nome_museum);

    // 2. Processa os Artistas dentro deste Museu
    const artistasComSlug = museum.exposicao_artistas.map((artista) => {
      const artistaSlug = createSlug(artista.nome_artista);

      // 3. Processa as Obras dentro deste Artista
      const obrasComSlug = artista.obras.map((obra) => {
        // ATENÇÃO: nome_obra é um Array. Pegamos o primeiro item [0]
        const nomePrincipal = Array.isArray(obra.nome_obra)
          ? obra.nome_obra[0]
          : obra.nome_obra;

        return {
          ...obra,
          slug_obra: createSlug(nomePrincipal), // Cria o campo slug_obra
        };
      });

      return {
        ...artista,
        obras: obrasComSlug, // Substitui o array antigo pelo novo com slugs
        slug_artista: artistaSlug, // Cria o campo slug_artista
      };
    });

    return {
      ...museum,
      exposicao_artistas: artistasComSlug, // Substitui o array antigo pelo novo
      slug_museum: museumSlug, // Cria o campo slug_museum
    };
  });
};

// Exporta os dados já processados prontos para uso
export const dataWithSlugs = addSlugsToData(originalData);
