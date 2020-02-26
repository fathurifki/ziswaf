import {
  SET_DATA,
  UserState,
  GetActionTypes,
  SET_HOME,
  HomeState,
  GetActionType
} from "./types";
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

export const getHomeData = (payload: HomeState): GetActionType => {
  return {
    type: SET_HOME,
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
      dispatch(getUserData(res.data));
    })
    .catch(error => {
      console.error(error);
    });
};

export const getHomesData = () => async (dispatch: Function) => {
  const presenter = await container.resolve(HomePresenter);
  presenter
    .loadData({})
    .then((res: any) => {
      dispatch(getHomeData(res.data));
      console.log("RESPONSE ACTION ==>", res);
    })
    .catch(err => {
      console.log("RESPONSE ERRORR ==>", err);
    });
};
