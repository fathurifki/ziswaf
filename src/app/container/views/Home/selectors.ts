import { createSelector } from "reselect";

export const selectUserReducer = () => (state: any) => {
  return state.GetReducer;
};

export const getHomeList = () =>
  createSelector(selectUserReducer(), state => {
    return state.data;
  });
