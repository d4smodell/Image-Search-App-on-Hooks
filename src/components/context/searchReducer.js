export const SEARCH_IMAGES = "SEARCH_IMAGES";

export const searchReducer = (state, action) => {
  switch (action.type) {
    case SEARCH_IMAGES:
      return {
        ...state,
        images: action.images,
      };
    default:
      return state;
  }
};
