import { SET_DATA, UserState, GetActionTypes } from "./types";
import axiosApi from "../../../../utils/axios";

// Clean Architecture
import { container } from "tsyringe";
import { HomePresenter } from "../../presenters/HomePresenter";
import { Home } from "../../../../domain/entities/Home";

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
      getState(res);
    })
    .catch(error => {
      console.log("RESPONSEERROR====", error);
      console.error(error);
    });
};

export const getHomesData = () => async () => {
  const presenter = await container.resolve(HomePresenter);
  presenter
    .loadData({})
    .then((res: Home) => {
      console.log("RESPONSE ACTION ==>", res);
    })
    .catch(err => {
      console.log("RESPONSE ERRORR ==>", err);
    });
};
