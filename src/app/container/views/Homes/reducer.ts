import { SET_HOME, SET_DATA, GetActionTypes, GetActionType } from './types'
import { HomeData } from '../../../../domain/entities/Home'
const initialState = {
    data: []
}

const GetReducer = (state = initialState, action: GetActionType) => {
  switch (action.type) {
    // case SET_DATA:
    //   return { ...state, data: action.payload };
    case SET_HOME:
      return { ...state, data: action.payload };

    default:
      return state;
  }
};

export default GetReducer