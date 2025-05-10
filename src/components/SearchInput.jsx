function SearchInput() {
 return (
  <form className="flex items-center justify-center w-full max-w-md mx-auto mt-3"> 
<label htmlFor="search" className="sr-only"></label>
   <input type="text" placeholder="Search..." className="w-full p-2 border border-gray-300 rounded" />
  
  </form>
 )
}

export default SearchInput
