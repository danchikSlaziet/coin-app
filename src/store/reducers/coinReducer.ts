import { CoinAction, CoinActionTypes, CoinState } from "../../types/coin"

const initialState: CoinState = {
  coins: [],
  loading: false,
  error: null,
  limit: 10
}

export const coinReducer = (state = initialState, action: CoinAction): CoinState => {
  switch (action.type) {
    case CoinActionTypes.FETCH_COINS:
      return {...state, loading: true, error: null, coins: [] }
    case CoinActionTypes.FETCH_COINS_SUCCESS:
      return {...state, loading: false, error: null, coins: action.payload }
    case CoinActionTypes.FETCH_COINS_ERROR:
      return {...state, loading: false, error: action.payload, coins: [] }
    case CoinActionTypes.SET_COINS_LIMIT:
      return {...state, limit: action.payload}
    default:
      return state
  }
}