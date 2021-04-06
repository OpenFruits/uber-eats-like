import { REQUEST_STATE } from '../constants';

type State = {
  fetchState: string;
  restaurantsList: Restaurant[];
};

export const initialState: State =  {
  fetchState: REQUEST_STATE.INITIAL,
  restaurantsList: [],
};

export const restaurantsActionTypes = {
  FETCHING: 'FETCHING',
  FETCH_SUCCESS: 'FETCH_SUCCESS',
} as const;

type valueOf<T> = T[keyof T];

export type Restaurant = {
  id: number;
  name: string;
  fee: number;
  time_required: number;
  created_at: any;
  updated_at: any;
};

type Action = {
  type: valueOf<typeof restaurantsActionTypes>;
  payload?: {restaurants: Restaurant[]};
};

export const restaurantsReducer = (state: State, action: Action) => {
  switch (action.type) {
    case restaurantsActionTypes.FETCHING:
      return {
        ...state,
        fetchState: REQUEST_STATE.LOADING,
      };
    case restaurantsActionTypes.FETCH_SUCCESS:
      if (action.payload !== undefined) {
        return {
          fetchState: REQUEST_STATE.OK,
          restaurantsList: action.payload?.restaurants,
        };
      }
      return {
        ...state,
        fetchState: REQUEST_STATE.LOADING,
      };
    default:
      throw new Error();
  }
}