import iconPath from '../images/hero-icon.png';

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero__content">
        <img className="hero__icon" src={iconPath} alt="" />
        <h1 className='hero__title'>CryptoList</h1>
        <nav className='nav'>
          <ul className='nav__list'>
            <li className='nav__item'>
              Currencies
            </li>
            <li className='nav__item'>
              About
            </li>
            <li className='nav__item'>
              Contacts
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default Hero;