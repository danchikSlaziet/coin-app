import { Route, Routes } from "react-router-dom";
import CoinList from "./components/CoinList";
import Hero from "./components/Hero"
import Welcome from "./components/Welcome";
import CoinInfo from "./components/CoinInfo";
import Faq from "./components/Faq";
import Footer from "./components/Footer";

function App() {

  return (
    <main>
      <Hero />
      <Welcome />
      <Routes>
        <Route path="/" element={<CoinList />} />
        <Route path='/:id' element={<CoinInfo />}/>
      </Routes>
      <Faq />
      <Footer />
    </main>
  );
};

export default App;
