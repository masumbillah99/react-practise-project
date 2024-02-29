/** get local img url in online */
export const getImgUrl = (name) => {
  return new URL(`../assets/movie-covers/${name}`, import.meta.url).href;
};
