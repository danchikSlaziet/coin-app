import axios from "axios"
import {Dispatch} from 'redux'
import { CoinAction, CoinActionTypes } from "../../types/coin"

export const fetchCoins = (page = 1):any => {
  return async function(dispatch: Dispatch<CoinAction>) {
    try {
      dispatch({type: CoinActionTypes.FETCH_COINS})
      const response = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=${page}&sparkline=false`, {
      });
      dispatch({type: CoinActionTypes.FETCH_COINS_SUCCESS, payload: response.data})
    }
    catch(error) {
      dispatch({type: CoinActionTypes.FETCH_COINS_ERROR, payload: 'Ошибка стороннего сервиса (превышен лимит запросов). Подождите 1-2 минуты и перезагрузите страницу.'})
    }
  }
}

export const fetchCoin = (id: string | undefined, loader: Function):any => {
  return async function(dispatch: Dispatch<CoinAction>) {
    try {
      dispatch({type: CoinActionTypes.FETCH_COIN})
      const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}`, {
      });
      loader(true);
      dispatch({type: CoinActionTypes.FETCH_COIN_SUCCESS, payload: response.data})
    }
    catch(error) {
      dispatch({type: CoinActionTypes.FETCH_COIN_ERROR, payload: 'Ошибка стороннего сервиса (превышен лимит запросов). Подождите 1-2 минуты и перезагрузите страницу.'})
    }
  }
}