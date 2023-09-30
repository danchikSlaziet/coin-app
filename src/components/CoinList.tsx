import { useEffect, useState } from 'react';
import Coin from './Coin';
import { fetchCoins } from '../store/action-creaters/coin';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useDispatch } from 'react-redux';

const CoinList: React.FC = () => {
  const {error, loading, coins, limit} = useTypedSelector((state) => state.coinReducer);
  const dispatch = useDispatch();
  const [value, setValue] = useState('');

  const inputHandler = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setValue(evt.target.value);
  }

  useEffect(() => {
    dispatch(fetchCoins(5));
  }, [])


  return (
    <section className='coins'>
      <div className='max-width-wrapper'>
        {coins?.map((coin) => {
          return <Coin key={coin.id} coin={coin}/>;
        })}
      </div>
    </section>
  );
};

export default CoinList;