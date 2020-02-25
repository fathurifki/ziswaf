import { combineReducers } from 'redux';
import GetReducer from './app/redux/reducer';

const reducers = combineReducers({
    GetReducer
})

export type RootState = ReturnType<typeof reducers>
export default reducers