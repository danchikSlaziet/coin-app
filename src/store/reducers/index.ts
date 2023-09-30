import { coinReducer } from './coinReducer';
import {combineReducers} from 'redux';

// пока один редюсер (combineReducers на будущее)
export const rootReducer = combineReducers({
  coinReducer,
})

export type RootState = ReturnType<typeof rootReducer>