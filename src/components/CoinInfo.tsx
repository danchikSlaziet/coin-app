import React from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { ICoin } from '../types/coin';
import examplePath from '../images/hero-bg.png';
import { useEffect, useState } from 'react'
import { fetchCoin } from '../store/action-creaters/coin';
import { useDispatch } from 'react-redux';

const CoinInfo: React.FC = () => {
  const {id} = useParams();
  const [load, setLoad] = useState(false);
  let {coins, loading, error} = useTypedSelector((state) => state.coinReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCoin(id, setLoad));
  },[])
  if (typeof coins !== 'undefined') {
    
  }
  else {
    coins = []
  }

  let percentClass = Number(coins[0]?.changePercent24Hr) > 0 ? 'coin-info__stat_col_green' : 'coin-info__stat_col_red';
  const preloaderClass = loading ? 'preloader-5 preloader-5_position_absolute preloader-5_active' : 'preloader-5';
  return (
    <section className='coin-info'>
      <div className='max-width-wrapper'>
        <div className={preloaderClass}></div>
        <div className='coin-info__wrapper'>
          <div className='coin-info__side-info'>
            <img className='coin-info__image' src={examplePath} alt="" />
            <p className='coin-info__name'>{load && coins[0]?.id}</p>
            <p className='coin-info__rank'>Rank: #{load && coins[0]?.rank}</p>
          </div>
          <div className='coin-info__main-info'>
            <div className='coin-info__stats'>
              <p className='coin-info__stat'>24h change: <span className={percentClass}>{load && Math.round(Number(coins[0]?.changePercent24Hr)*100)/100} %</span></p>
              <p className='coin-info__stat'>Price: <span className='coin-info__stat_col_green'>{load && Math.round(Number(coins[0]?.priceUsd)*100)/100} $</span></p>
              <p className='coin-info__stat'>Symbol: {load && coins[0]?.symbol}</p>
            </div>
            <div className='coin-info__text'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
               Veniam corrupti magni, eligendi error adipisci in alias fugit 
               autem. Consectetur aut nemo exercitationem expedita voluptatem 
               incidunt iusto eius molestiae? Nostrum, labore.
            </div>
            <NavLink to='/' className='coin-info__back'>GO BACK</NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoinInfo;