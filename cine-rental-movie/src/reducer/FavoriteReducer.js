export const inititalFavArray = { favoriteData: [] };

export const favoriteReducer = (favs, action) => {
  switch (action.type) {
    case "ADD_TO_FAV": {
      return {
        favoriteData: [...favs.favoriteData, action.payload],
      };
    }

    default: {
      return favs;
    }
  }
};
