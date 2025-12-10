/**
 * Transforma uma string em um slug URL-friendly.
 * Ex: "Olá Mundo! O vídeo 100%." -> "ola-mundo-o-video-100"
 */
export const createSlug = (text) => {
  if (!text) return "";

  return text
    .toString() // Garante que é uma string
    .toLowerCase() // Transforma em minúsculas
    .normalize("NFD") // Separa os acentos das letras (Ex: 'á' vira 'a' + '´')
    .replace(/[\u0300-\u036f]/g, "") // Remove os caracteres de acento isolados pelo passo anterior
    .trim() // Remove espaços em branco do início e fim
    .replace(/[^a-z0-9\s-]/g, "") // Remove caracteres especiais (mantém apenas letras, números, espaços e hifens)
    .replace(/\s+/g, "-") // Substitui espaços (um ou mais) por hífen
    .replace(/-+/g, "-"); // Remove hifens duplicados (caso existam)
};
