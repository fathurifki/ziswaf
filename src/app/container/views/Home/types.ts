import { Home } from '../../../../domain/entities/Home'

export const SET_HOME = "SET_HOME";

interface GetHomeDataAction {
    type: typeof SET_HOME
    payload: Home
}

export type GetActionType = GetHomeDataAction
