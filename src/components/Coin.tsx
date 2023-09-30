import examplePath from '../images/hero-bg.png';
import {  ICoin } from '../types/coin';

interface CoinProps {
  children?: React.ReactNode
  coin: ICoin
}

const Coin: React.FC<CoinProps> = ({coin}) => {
  return (
    <div className='coin'>
      <img className="coin__image" src={examplePath} alt="" />
      <div className='coin__text'>
        <h3 className="coin__title">{coin.name}</h3>
        <p className="coin__subtitle">
          $ {Math.round(Number(coin.priceUsd)*1000)/1000}
        </p>
      </div>
      <div className='coin__text coin__text_rank'>
        <h3 className="coin__title">rank</h3>
        <p className="coin__subtitle">
          {coin.rank}
        </p>
      </div>
      <svg className="coin__angel" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill="white" fillRule="evenodd" clipRule="evenodd">
        <path d="M4 .755l14.374 11.245-14.374 11.219.619.781 15.381-12-15.391-12-.609.755z"/>
      </svg>
    </div>
  );
};

export default Coin;