import { useState } from "react";
import SearchBar from "./components/SearchBar";
import RecipeCard from "./components/RecipeCard";
import "./App.css";

function App() {
  const [recipes, setRecipes] = useState([]);

  const searchRecipes = async (query) => {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
    );
    const data = await res.json();
    setRecipes(data.meals || []);
  };

  return (
    <div className="app">
      <h1>🍽️ Recipe Finder</h1>
      <SearchBar onSearch={searchRecipes} />
      <div className="recipe-list">
        {recipes.length > 0 ? (
          recipes.map((meal) => <RecipeCard key={meal.idMeal} recipe={meal} />)
        ) : (
          <p className="no-result">Search a recipe to get started!</p>
        )}
      </div>
    </div>
  );
}

export default App;
