import React from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { useTypedSelector } from '../hooks/useTypedSelector';
import bitcoinPath from '../images/bitcoin-btc-logo.png';
import bnbPath from '../images/bnb-bnb-logo.png';
import cardanoPath from '../images/cardano-ada-logo.png';
import dogePath from '../images/dogecoin-doge-logo.png';
import ethPath from '../images/ethereum.png';
import solPath from '../images/solana-sol-logo.png';
import tethPath from '../images/tether-usdt-logo.png';
import tronPath from '../images/tron-trx-logo.png';
import usdcPath from '../images/usd-coin-usdc-logo.png';
import xrpPath from '../images/xrp-xrp-logo.png';
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

  let percentClass = Number(coins[0]?.changePercent24Hr) > 0 ? 'coin-info__stat_col_green' : 'coin-info__stat_col_red';
  const preloaderClass = loading ? 'preloader-5 preloader-5_position_absolute preloader-5_active' : 'preloader-5';

  const array = [
    {
      name: 'bitcoin',
      path: bitcoinPath
    },
    {
      name: 'ethereum',
      path: ethPath
    },
    {
      name: 'ripple',
      path: xrpPath
    },
    {
      name: 'tether',
      path: tethPath
    },
    {
      name: 'binance-coin',
      path: bnbPath
    },
    {
      name: 'usd-coin',
      path: usdcPath
    },
    {
      name: 'xrp',
      path: xrpPath
    },
    {
      name: 'solana',
      path: solPath
    },
    {
      name: 'cardano',
      path: cardanoPath
    },
    {
      name: 'dogecoin',
      path: dogePath
    },
    {
      name: 'tron',
      path: tronPath
    },
  ]
  
  let imgUrl: any;
  array.forEach((elem) => {
    if (elem.name === id) {
      imgUrl = elem.path;
    }
  })

  return (
    <section className='coin-info'>
      <div className='max-width-wrapper'>
        <div className={preloaderClass}></div>
        <div className='coin-info__wrapper'>
          <div className='coin-info__side-info'>
            <img className='coin-info__image' src={Number(coins[0]?.rank) > 10 ? examplePath : imgUrl} alt="" />
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