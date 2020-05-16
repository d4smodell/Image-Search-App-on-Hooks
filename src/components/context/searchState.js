import React, { useReducer } from "react";
import { SearchContext } from "./searchContext";
import { searchReducer, SEARCH_IMAGES } from "./searchReducer";
import Axios from "axios";

export const SearchState = ({ children }) => {
  const initialState = {
    images: [],
  };
  const [state = initialState, dispatch] = useReducer(searchReducer);

  const searchImages = async (value) => {
    const API_KEY = "16443821-925dcbf9aabe6b8adf2f55117";
    const response = await Axios.get(
      `https://pixabay.com/api/?key=${API_KEY}&q=${value}&image_type=photo`
    );
    dispatch({ type: SEARCH_IMAGES, images: response.data.hits });
  };

  return (
    <SearchContext.Provider
      value={{
        searchImages,
        images: state.images,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
