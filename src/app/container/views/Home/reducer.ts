import { SET_HOME, GetActionType } from './types'
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