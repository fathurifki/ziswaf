import { Home, HomeData } from '../../../../domain/entities/Home'
export interface UserData {
    userId: number
    id: number
    title: string
    body: string
}

export interface UserState {
    data: UserData[]
}

export interface HomeState {
  data: HomeData[];
}

export const SET_DATA = 'SET_DATA'
export const SET_HOME = "SET_HOME";

interface GetUserDataAction {
    type: typeof SET_DATA
    payload: UserState
}

interface GetHomeDataAction {
    type: typeof SET_HOME
    payload: HomeState
}

export type GetActionTypes = GetUserDataAction
export type GetActionType = GetHomeDataAction
