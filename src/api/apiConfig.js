const apiConfig = {
  baseUrl: "https://api.themoviedb.org/3",
  api_key: "e49c9be6256b1eaf54581c1afd2ce4dd",
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;
