import { combineReducers } from 'redux';
import GetReducer from './app/container/views/Home/reducer';

const rootReducers = combineReducers({
    GetReducer
})

export type RootState = ReturnType<typeof rootReducers>;
export default rootReducers;