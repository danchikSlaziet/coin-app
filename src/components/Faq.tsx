

const Faq = () => {
  return (
    <section id='faq' className="faq">
      <div className="max-width-wrapper">
        <h4 className="faq__title">
          Curious Minds
        </h4>
        <div className="faq__blocks">
          <div className="faq__block">
            <p className="faq__question">
              What are cryptocurrencies?
            </p>
            <p className="faq__text">
              Cryptocurrencies are digital assets used as 
              a medium of exchange, utilizing cryptography 
              to secure transactions and control the creation 
              of new units. Welcome to the age of virtual moolah!
            </p>
          </div>
          <div className="faq__block">
            <p className="faq__question">
              What's the best crypto?
            </p>
            <p className="faq__text">
              It's like picking a favorite child! Each coin has its
              own merits and quirks– but Bitcoin, Ethereum, and Binance 
              Coin continue to dominate the market and dazzle investors.
            </p>
          </div>
          <div className="faq__block">
            <p className="faq__question">
              How do I get started?
            </p>
            <p className="faq__text">
              It's easier than you'd think! Research and 
              create a crypto wallet, select a reputable crypto 
              exchange, and begin trading. Remember: Invest wisely and HODL tight!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;