import { Reducer } from 'redux';

import { ActionTypes, ActionsAll } from './actions';
import { TCategory } from 'core/types';

type TState = {
  error?: any;
  requesting: boolean;
  indexed: {[key: string]: TCategory};
  separated: TCategory[];
};

const initialState: TState = {
  requesting: false,
  indexed: {},
  separated: [],
};

export type TCategoriesState = TState;
export const categoriesInitialState = initialState;
export const categoriesReducer: Reducer<TState> = (state: TState = initialState, action: ActionsAll): TState => {
  switch (action.type) {
    case ActionTypes.LOAD_CATEGORIES:
      return { ...state, requesting: true };
    case ActionTypes.LOAD_INDEXED_CATEGORIES_SUCCESS:
      return { ...state, indexed: action.data, requesting: false, error: false };
    case ActionTypes.LOAD_SEPARATED_CATEGORIES_SUCCESS:
      return { ...state, separated: action.data, requesting: false, error: false };
    case ActionTypes.LOAD_CATEGORIES_FAIL:
      return { ...state, error: action.error, requesting: false };

    default: return state;
  }
};
