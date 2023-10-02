import React from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useEffect, useState } from 'react'
import { fetchCoin } from '../store/action-creaters/coin';
import { useDispatch } from 'react-redux';
import DOMPurify from "dompurify";

const CoinInfo: React.FC = () => {
  const {id} = useParams();
  const [load, setLoad] = useState(false);
  let {coins, loading, error} = useTypedSelector((state) => state.coinReducer);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCoin(id, setLoad));
    return () => {
      // потом через useRef сделай
      let coinsSection: HTMLElement | null = document.querySelector('.coins');
      coinsSection?.scrollIntoView({behavior: 'smooth'});
    }
  },[])

  if (typeof coins !== 'undefined') {
    
  }
  else {
    coins = []
  }

  let percentClass = Number(coins[0]?.market_data?.price_change_percentage_24h) > 0 ? 'coin-info__stat_col_green' : 'coin-info__stat_col_red';
  const preloaderClass = loading ? 'preloader-5 preloader-5_position_absolute preloader-5_active' : 'preloader-5';


  return (
    <section className='coin-info'>
      <div className='max-width-wrapper'>
        <div className={preloaderClass}></div>
        <div className='coin-info__wrapper'>
          <div className='coin-info__side-info'>
            <img className='coin-info__image' src={coins[0]?.image.large} alt="" />
            <p className='coin-info__name'>{load && coins[0]?.id}</p>
            <p className='coin-info__rank'>Rank: #{load && coins[0]?.market_cap_rank}</p>
          </div>
          <div className='coin-info__main-info'>
            <div className='coin-info__stats'>
              <p className='coin-info__stat'>24h change: <span className={percentClass}>{load && Math.round(Number(coins[0]?.market_data?.price_change_percentage_24h)*100)/100} %</span></p>
              <p className='coin-info__stat'>Price: <span className='coin-info__stat_col_green'>{load && Math.round(Number(coins[0]?.market_data?.current_price.usd)*100)/100} $</span></p>
              <p className='coin-info__stat'>Symbol: {load && coins[0]?.symbol}</p>
            </div>
            <div 
              className='coin-info__text'
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(
                  coins[0]?.description?.en
                ),
              }}
            >
            </div>
            <div className='coin-info__error'>{error}</div>
            <NavLink to='/' className='coin-info__back'>GO BACK</NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoinInfo;