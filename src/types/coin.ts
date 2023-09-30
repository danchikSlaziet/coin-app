export interface CoinState {
  coins?: ICoin[]
  loading: boolean
  error: null | string
  limit?: number
}

export interface ICoin {
  id: string,
  rank: string
  symbol: string
  name: string
  supply: string
  maxSupply: string
  marketCapUsd: string
  volumeUsd24Hr: string
  priceUsd: string
  changePercent24Hr: string
  vwap24Hr: string
}

export enum CoinActionTypes {
  FETCH_COINS = 'FETCH_COINS',
  FETCH_COINS_SUCCESS = 'FETCH_COINS_SUCCESS',
  FETCH_COINS_ERROR = 'FETCH_COINS_ERROR',
  SET_COINS_LIMIT = 'SET_COINS_LIMIT',
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

export type CoinAction = FetchCoinAction | FetchCoinErrorAction | FetchCoinSuccessAction | SetCoinPage;