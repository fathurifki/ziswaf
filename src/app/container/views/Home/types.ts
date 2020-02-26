import { HomeData } from '../../../../domain/entities/Home'

export interface HomeState {
  data: HomeData[];
}

export const SET_HOME = "SET_HOME";

interface GetHomeDataAction {
    type: typeof SET_HOME
    payload: HomeState
}

export type GetActionType = GetHomeDataAction
