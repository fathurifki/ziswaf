export interface UserData {
    userId: number
    id: number
    title: string
    body: string
}

export interface UserState {
    data: UserData[]
}

export const SET_DATA = 'SET_DATA'

interface GetUserDataAction {
    type: typeof SET_DATA
    payload: UserState
}

export type GetActionTypes = GetUserDataAction
