import { GetActionType, SET_HOME } from "./types";

// Clean Architecture
import { container } from "tsyringe";
import { HomePresenter } from "../../presenters/HomePresenter";
import { Home } from '../../../../domain/entities/Home';

export const getHomeData = (payload: Home): GetActionType => {
  return {
    type: SET_HOME,
    payload
  };
};

export const getHomesData = () => async (dispatch: Function) => {
  const presenter = container.resolve(HomePresenter);
  var results =  await presenter.loadData(new Map<string, string>());
  dispatch(getHomeData(results));
};
