import axios from "axios"
import {Dispatch} from 'redux'
import { CoinAction, CoinActionTypes } from "../../types/coin"

export const fetchCoins = (limit = 10):any => {
  return async function(dispatch: Dispatch<CoinAction>) {
    try {
      dispatch({type: CoinActionTypes.FETCH_COINS})
      const response = await axios.get('https://api.coincap.io/v2/assets', {
        params: {
          limit: limit
        }
      });
      dispatch({type: CoinActionTypes.FETCH_COINS_SUCCESS, payload: response.data.data})
    }
    catch(error) {
      dispatch({type: CoinActionTypes.FETCH_COINS_ERROR, payload: 'Произошла ошибка при загрузке списка дел'})
    }
  }
}