import { MODI_INFOR, SET_INFOR } from "./types";

const initialState = {
  infors: [],
};

const inforReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INFOR: {
      return {
        ...state,
        infors: [...state.infors, action.payload],
      };
    }
    case MODI_INFOR: {
      let information = state.infors;

      let modi = information.map((inf) => {
        if (inf.id === action.payload.id) {
          return { ...inf, data: action.payload.data };
        } else return inf;
      });

      return {
        ...state,
        infors: modi,
      };
    }
    default:
      return state;
  }
};


export default inforReducer;
