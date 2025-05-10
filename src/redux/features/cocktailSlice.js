import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCocktails = createAsyncThunk(
  "cocktails/fetchCocktails",
  async () => {
    const letters = "abcdefghijklmnopqrstuvwxyz".split("");
    const allDrinks = [];

    for (const letter of letters) {
      const res = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`
      );
      const data = await res.json();
      if (data.drinks) {
        allDrinks.push(...data.drinks);
      }
    }

    return { drinks: allDrinks };
  }
);

export const singleCocktailFetch = createAsyncThunk(
  "cocktails/singleCocktailFetch",
  async (id) => {
    const res = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    const data = await res.json();
    return { cocktail: data.drinks ? data.drinks[0] : null };
  }
);


const cocktailSlice = createSlice({
  name: "cocktails",
  initialState: {
    cocktails: [],
    cocktail: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCocktails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCocktails.fulfilled, (state, action) => {
        state.loading = false;
        state.cocktails = action.payload.drinks;
      })
      .addCase(fetchCocktails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });

    // Fetch a single cocktail
    builder
      .addCase(singleCocktailFetch.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(singleCocktailFetch.fulfilled, (state, action) => {
        state.loading = false;
        state.cocktail = action.payload.cocktail;
      })
      .addCase(singleCocktailFetch.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default cocktailSlice.reducer;
