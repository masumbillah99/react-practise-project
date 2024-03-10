const inititalState = {
  cartData: [],
  favoriteData: [],
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      return {
        cartData: [...state.cartData, action.payload],
      };
    }

    case "REMOVE_FROM_CART": {
      return {
        ...state,
        cartData: state.cartData?.filter(
          (item) => item.id !== action.payload.id
        ),
      };
    }

    case "ADD_TO_FAV": {
      return {
        favoriteData: [...state.favoriteData, action.payload],
      };
    }

    default: {
      throw Error`Not matched this ${action.type}`;
    }
  }
};

export { inititalState, cartReducer };
