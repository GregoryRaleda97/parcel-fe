import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { parcelReducers } from './parcelReducer';
import { productReducers } from './productReducer';

export const Reducers = combineReducers({
    authReducer, parcelReducers, productReducers
})