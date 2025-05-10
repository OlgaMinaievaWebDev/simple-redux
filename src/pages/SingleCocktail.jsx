import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { singleCocktailFetch } from "../redux/features/cocktailSlice";

function SingleCocktail() {
  const { id } = useParams(); // Get the cocktail ID from the URL
  const dispatch = useDispatch();
  const { cocktail, loading, error } = useSelector((state) => state.app);

  useEffect(() => {
    if (id) {
      dispatch(singleCocktailFetch(id)); // Fetch the cocktail when the component mounts
    }
  }, [dispatch, id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!cocktail) return <p>Cocktail not found!</p>;

  return (
    <div>
      <h1>{cocktail.strDrink}</h1>
      <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
      <p>{cocktail.strInstructions}</p>
      <p>Category: {cocktail.strCategory}</p>
      <p>Alcoholic: {cocktail.strAlcoholic}</p>
      <p>Glass: {cocktail.strGlass}</p>
    </div>
  );
}

export default SingleCocktail;
