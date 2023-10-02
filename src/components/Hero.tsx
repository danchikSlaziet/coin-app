import iconPath from '../images/hero-icon.png';
import {useNavigate} from 'react-router-dom';

const Hero: React.FC = () => {
  const navigate = useNavigate();
  function currenciesHandler() {
    navigate('/');
    // потом через useRef сделай
    let coinsSection: HTMLElement | null = document.querySelector('.coins');
    coinsSection?.scrollIntoView({behavior: 'smooth'});
  }

  function faqHandler() {
    // потом через useRef сделай
    let faqSection: HTMLElement | null = document.querySelector('.faq');
    faqSection?.scrollIntoView({behavior: 'smooth'});
  }

  return (
    <section className="hero">
      <div className="hero__content">
        <img className="hero__icon" src={iconPath} alt="" />
        <h1 className='hero__title'>CryptoList</h1>
        <nav className='nav'>
          <ul className='nav__list'>
            <li onClick={currenciesHandler} className='nav__item'>
              <a className='nav__link'>Currencies</a>
            </li>
            <li onClick={faqHandler} className='nav__item'>
              <a className='nav__link'>FAQ</a>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default Hero;