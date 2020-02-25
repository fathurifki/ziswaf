import { SET_DATA, GetActionTypes } from './types'

const initialState = {
    data: []
}

const GetReducer = (state = initialState, action: GetActionTypes) => {
    switch (action.type) {

    case SET_DATA:
        return { ...state, data:action.payload}

    default:
        return state
    }
}

export default GetReducer