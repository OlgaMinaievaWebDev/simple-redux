import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SingleCocktail from "./pages/SingleCocktail";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cocktail/:id" element={<SingleCocktail />} />
        </Routes>
    </div>
  );
}

export default App
