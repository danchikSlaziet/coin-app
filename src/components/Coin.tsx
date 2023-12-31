import { useNavigate } from 'react-router-dom';
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
  let percentClass = Number(coin.price_change_percentage_24h) > 0 ? 'coin__subtitle' : 'coin__subtitle coin__subtitle_col_red';

  return (
    <>
      <div className='coin' onClick={() => coinHandler(coin.id)}>
        <img 
          className="coin__image"
          alt="" 
          src={coin.image}
        />
        <div className='coin__text'>
          <h3 className="coin__title">{coin.name}</h3>
          <p className="coin__subtitle">
            $ {Math.round(Number(coin.current_price)*1000)/1000}
          </p>
        </div>
        <div className='coin__text coin__text_rank'>
          <h3 className="coin__title">24h change</h3>
          <p className={percentClass}>
            {Math.round(Number(coin.price_change_percentage_24h)*100)/100} %
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