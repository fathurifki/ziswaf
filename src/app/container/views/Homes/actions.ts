import { SET_DATA, UserState, GetActionTypes } from "./types";
import axiosApi from "../../../../utils/axios";



export const getUserData = (payload: UserState): GetActionTypes => {
  return {
    type: SET_DATA,
    payload
  };
};

export const fetchUserData = () => (
  dispatch: Function,
  getState: Function
): void => {
  axiosApi
    .get(`/posts`)
    .then(res => {
      console.log("RESPONSEE====", res);
    })
    .catch(error => {
      console.log("RESPONSEERROR====", error);
      console.error(error);
    });
};
