/* eslint-disable import/prefer-default-export */
import { createStore } from 'redux';
import { reducer } from './reducer';

export const store = createStore(reducer);
