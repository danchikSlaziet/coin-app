import { useNavigate } from 'react-router-dom';
import axios from "axios"
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
import { ICoin } from '../types/coin';

interface CoinProps {
  children?: React.ReactNode
  coin: ICoin
}

const Coin: React.FC<CoinProps> = ({coin}) => {
  const navigate = useNavigate();
  const coinHandler = (coinID: string) => {
    navigate(`/${coinID}`);
  }
  let percentClass = Number(coin.changePercent24Hr) > 0 ? 'coin__subtitle' : 'coin__subtitle coin__subtitle_col_red';

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

  // async function fetchImages() {
  //   const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${coin.id}`);
  //   console.log(response);
  // }

  // fetchImages();
  
  let imgUrl: any;
  array.forEach((elem) => {
    if (elem.name === coin.id) {
      imgUrl = elem.path;
    }
  })

  return (
    <>
      <div className='coin' onClick={() => coinHandler(coin.id)}>
        <img 
          className="coin__image"
          alt="" 
          src={Number(coin.rank) > 10 ? examplePath : imgUrl}
        />
        <div className='coin__text'>
          <h3 className="coin__title">{coin.name}</h3>
          <p className="coin__subtitle">
            $ {Math.round(Number(coin.priceUsd)*1000)/1000}
          </p>
        </div>
        <div className='coin__text coin__text_rank'>
          <h3 className="coin__title">24h change</h3>
          <p className={percentClass}>
            {Math.round(Number(coin.changePercent24Hr)*100)/100} %
          </p>
        </div>
        <svg className="coin__angel" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill="white" fillRule="evenodd" clipRule="evenodd">
          <path d="M4 .755l14.374 11.245-14.374 11.219.619.781 15.381-12-15.391-12-.609.755z"/>
        </svg>
      </div>
    </>
  );
};

export default Coin;