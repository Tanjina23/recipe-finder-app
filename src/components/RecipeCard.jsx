import "./RecipeCard.css";

const RecipeCard = ({ recipe }) => {
  return (
    <div className="recipe-card">
      <img src={recipe.strMealThumb} alt={recipe.strMeal} />
      <div className="card-content">
        <h3>{recipe.strMeal}</h3>
        <p className="category">{recipe.strCategory}</p>
        <a
          href={recipe.strSource || recipe.strYoutube}
          target="_blank"
          rel="noreferrer"
          className="view-button"
        >
          View Recipe
        </a>
      </div>
    </div>
  );
};

export default RecipeCard;
