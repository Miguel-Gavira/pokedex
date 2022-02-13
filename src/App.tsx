import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import PokeDetail from "./components/pokeDetail";
import PokeList from "./components/pokeList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PokeList />} />
        <Route path="/detail/:id" element={<PokeDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
