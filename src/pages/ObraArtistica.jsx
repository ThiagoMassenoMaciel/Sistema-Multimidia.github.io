import React from "react";

const ObraArtistica = () => {
  return (
    <div class="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-500 via-pink-500 to-red-500">
      <div class="max-w-sm w-full p-6 rounded-xl bg-white/20 backdrop-blur-md border border-white/30 shadow-lg">
        <h2 class="text-2xl font-bold text-white mb-2">Obra Artistica</h2>

        <button class="px-4 py-2 bg-white/30 hover:bg-white/40 text-white font-semibold rounded-lg transition">
          Ver ObraArtistica de arte
        </button>
      </div>
    </div>
  );
};

export default ObraArtistica;
