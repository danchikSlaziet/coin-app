import { CoinAction, CoinActionTypes, CoinState } from "../../types/coin"

const initialState: CoinState = {
  coins: [],
  loading: false,
  error: null,
  page: 1
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
      return {...state, page: action.payload}
    case CoinActionTypes.FETCH_COIN:
      return {loading: true, error: null}
      case CoinActionTypes.FETCH_COIN_SUCCESS:
        return {coins: [action.payload], loading: false, error: null}
      case CoinActionTypes.FETCH_COIN_ERROR:
        return { loading: false, error: action.payload}
    default:
      return state
  }
}