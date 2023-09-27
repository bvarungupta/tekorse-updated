import { reducerCases } from "./Constants";

export const initialState = {
  darkMode: false,
  dark_mode: "light",
};

const reducer = (state, action) => {
  switch (action.type) {
    case reducerCases.SET_DARK_MODE:
      return {
        ...state,
        darkMode: action.darkMode,
      };
    case reducerCases.DARK_MODE:
      return {
        ...state,
        dark_mode: action.dark_mode,
      };
    default:
      return state;
  }
};

export default reducer;
