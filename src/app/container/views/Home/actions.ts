import { HomeState, GetActionType, SET_HOME } from "./types";

// Clean Architecture
import { container } from "tsyringe";
import { HomePresenter } from "../../presenters/HomePresenter";

export const getHomeData = (payload: HomeState): GetActionType => {
  return {
    type: SET_HOME,
    payload
  };
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
