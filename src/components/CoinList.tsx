import { useEffect, useState } from 'react';
import Coin from './Coin';
import { fetchCoins } from '../store/action-creaters/coin';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useDispatch } from 'react-redux';

const CoinList: React.FC = () => {
  const { error, loading, coins } = useTypedSelector((state) => state.coinReducer);
  const dispatch = useDispatch();
  const [value, setValue] = useState('');

  const inputHandler = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setValue(evt.target.value);
  }

  const buttonHandler = () => {
    dispatch(fetchCoins(Number(value)));
  }

  useEffect(() => {
    dispatch(fetchCoins());
    return (() => {
      // потом через useRef сделай
      let coinsSection: HTMLElement | null = document.querySelector('.coin-info');
      coinsSection?.scrollIntoView({behavior: 'smooth'});
    })
  }, [])

  const preloaderClass = loading ? 'preloader-5 preloader-5_active' : 'preloader-5';

  return (
    <section className='coins'>
      <div className='max-width-wrapper'>
        <div className='coins__input-container'>
          Show first top <input className='coins__input' value={value} onChange={(evt) => inputHandler(evt)} type="text" /> ranks
          <button className='coins__button' onClick={buttonHandler} type='button'>confirm</button>
          <div className='coins__input-error'>{error}</div>
        </div>
        <div className={preloaderClass}></div>
        {coins?.map((coin) => {
          return <Coin key={coin.id} coin={coin} />;
        })}
      </div>
    </section>
  );
};

export default CoinList;