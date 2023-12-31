export interface CoinState {
  coins?: ICoin[]
  loading: boolean
  error: null | string
  page?: number
}

export interface ICoin {
  id: string,
  name: string
  symbol: string
  image: any
  current_price: string
  market_cap_rank: string
  price_change_percentage_24h: string
  description?: any
  market_data?: any
}

export enum CoinActionTypes {
  FETCH_COINS = 'FETCH_COINS',
  FETCH_COINS_SUCCESS = 'FETCH_COINS_SUCCESS',
  FETCH_COINS_ERROR = 'FETCH_COINS_ERROR',
  FETCH_COIN = 'FETCH_COIN',
  FETCH_COIN_SUCCESS = 'FETCH_COIN_SUCCESS',
  FETCH_COIN_ERROR = 'FETCH_COIN_ERROR',
  SET_COINS_LIMIT = 'SET_COINS_LIMIT',
}

interface FetchOneCoin {
  type: CoinActionTypes.FETCH_COIN,
}
interface FetchOneCoinSuccess {
  type: CoinActionTypes.FETCH_COIN_SUCCESS,
  payload: ICoin
}
interface FetchOneCoinError {
  type: CoinActionTypes.FETCH_COIN_ERROR,
  payload: string
}
interface FetchCoinAction {
  type: CoinActionTypes.FETCH_COINS
}
interface FetchCoinSuccessAction {
  type: CoinActionTypes.FETCH_COINS_SUCCESS;
  payload: any[];
}
interface FetchCoinErrorAction {
  type: CoinActionTypes.FETCH_COINS_ERROR;
  payload: string;
}
interface SetCoinPage {
  type: CoinActionTypes.SET_COINS_LIMIT;
  payload: number;
}

export type CoinAction = FetchOneCoin | FetchOneCoinSuccess | FetchOneCoinError | FetchCoinAction | FetchCoinErrorAction | FetchCoinSuccessAction | SetCoinPage;