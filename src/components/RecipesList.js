import React, { useContext } from 'react';
import { RecipesContext } from '../context/RecipesContext';
import Recipe from './Recipe';

const RecipesList = () => {

    // extract recipes
    const { recipes } = useContext(RecipesContext);

    console.log('taka', recipes);

    return (
        <div className="row mt-5">
            {recipes.map(recipe => (
                <Recipe
                    key={recipe.idDrink}
                    recipe={recipe}
                />
            ))}
        </div>
    );
}

export default RecipesList;