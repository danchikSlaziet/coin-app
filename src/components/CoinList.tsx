import { useEffect, useState } from 'react';
import Coin from './Coin';
import { fetchCoins } from '../store/action-creaters/coin';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useDispatch } from 'react-redux';

const CoinList: React.FC = () => {
  const { error, loading, coins } = useTypedSelector((state) => state.coinReducer);
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);


  const buttonHandler = (value: number) => {
    dispatch(fetchCoins(Number(value)));
  }

  useEffect(() => {
    if (localStorage.getItem('page')) {
      dispatch(fetchCoins(Number(localStorage.getItem('page'))))
      setPage(Number(localStorage.getItem('page')))
    }
    else {
      dispatch(fetchCoins());
    }
    return (() => {
      // потом через useRef сделай
      let coinsSection: HTMLElement | null = document.querySelector('.coin-info');
      coinsSection?.scrollIntoView({behavior: 'smooth'});
    })
  }, [])

  const buttonsArray: any[] = []

  for (let i = 1; i <= 5; i++) {
    buttonsArray.push(
      <button
        key={i}
        onClick={() => {
          buttonHandler(i);
          setPage(i);
          localStorage.setItem('page', `${i}`)
        }}
        className={i === page ? "coins__page-button coins__page-button_active" : "coins__page-button"}
      >
        {i}
      </button>
    );
  }

  const preloaderClass = loading ? 'preloader-5 preloader-5_active' : 'preloader-5';

  return (
    <section id='currencies' className='coins'>
      <div className='max-width-wrapper'>
        <div className='coins__pages-container'>
          {buttonsArray}
        </div>
        <div className='coins__page-error'>{error}</div>
        <div className={preloaderClass}></div>
        {coins?.map((coin) => {
          return <Coin key={coin.id} coin={coin} />;
        })}
      </div>
    </section>
  );
};

export default CoinList;