import { Route, Routes } from "react-router-dom";
import CoinList from "./components/CoinList";
import Hero from "./components/Hero"
import Welcome from "./components/Welcome";
import CoinInfo from "./components/CoinInfo";

function App() {
  return (
    <main>
      <Hero />
      <Welcome />
      <Routes>
        <Route path="/*" element={<CoinList />} />
        <Route path='/:id' element={<CoinInfo />}/>
      </Routes>
    </main>
  );
};

export default App;
