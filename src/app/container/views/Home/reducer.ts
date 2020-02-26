import { SET_HOME, GetActionType } from './types'
import { HomeData } from '../../../../domain/entities/Home'
const initialState = {
    data: []
}

const GetReducer = (state = initialState, action: GetActionType) => {
  switch (action.type) {
    case SET_HOME:
      return { ...state, data: action.payload };

    default:
      return state;
  }
};

export default GetReducer