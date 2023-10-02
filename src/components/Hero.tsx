import iconPath from '../images/hero-icon.png';
import {useNavigate} from 'react-router-dom';

const Hero: React.FC = () => {
  const navigate = useNavigate();
  function currenciesHandler() {
    navigate('/#currencies');
  }

  return (
    <section className="hero">
      <div className="hero__content">
        <img className="hero__icon" src={iconPath} alt="" />
        <h1 className='hero__title'>CryptoList</h1>
        <nav className='nav'>
          <ul className='nav__list'>
            <li onClick={currenciesHandler} className='nav__item'>
              <a className='nav__link' href='#currencies'>Currencies</a>
            </li>
            <li className='nav__item'>
              <a className='nav__link' href='#faq'>FAQ</a>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default Hero;