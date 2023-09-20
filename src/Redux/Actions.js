import { MODI_INFOR, SET_INFOR } from "./types";

export const setInformation = (infor) => {
  return {
    type: SET_INFOR,
    payload: infor,
  };
};

export const modifyInformation = (infor) => {
  return {
    type: MODI_INFOR,
    payload: infor,
  };
};
