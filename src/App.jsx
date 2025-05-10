import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SingleCocktail from "./pages/SingleCocktail";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cocktail/:id" element={<SingleCocktail />} />
        </Routes>
    </div>
  );
}

export default App
