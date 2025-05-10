import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { fetchCocktails } from '../redux/features/cocktailSlice'
import { Link } from "react-router-dom"

function CocktailList() {
const dispatch = useDispatch()
 const { cocktails, loading, error } = useSelector((state) => state.app)
 
 useEffect(() => {
  dispatch(fetchCocktails())
 }, [dispatch])
 
 const formattedCocktails = cocktails.map((cocktail) => {
   const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } = cocktail;
   return {
     id: idDrink,
     name: strDrink,
    image: strDrinkThumb,
     info: strAlcoholic,
     glass: strGlass,
   };
 });

 if (loading) return <p className="p-4">Loading...</p>;
 if (error) return <p className="p-4 text-red-500">Error: {error}</p>;
 return (
   <div className="p-4">
     <h1 className="text-2xl font-bold mb-4">Cocktail List</h1>
     <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
       {formattedCocktails.map((drink) => (
         <div key={drink.id} className="border p-2 rounded shadow">
           <img src={drink.image} alt={drink.name} className="w-full rounded" />
           <h2 className="mt-2 font-semibold">{drink.name}</h2>
           <p className="text-sm text-gray-600">{drink.info}</p>
           <p className="text-sm text-gray-600">{drink.glass}</p>
           <Link
             to={`/cocktail/${drink.id}`}
             className="text-blue-500 hover:underline"
           >
             Details
           </Link>
         </div>
       ))}
     </div>
   </div>
 );
}

export default CocktailList
