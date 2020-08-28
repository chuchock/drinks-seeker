import React, { createContext, useState } from 'react';

export const RecipesContext = createContext();

const RecipesProvider = (props) => {

    const [recipes, setRecipes] = useState([]);

    const [findRecipes, setFindRecipes] = useState({
        name: '',
        category: ''
    });

    return (
        <RecipesContext.Provider
            value={{
                setFindRecipes
            }}
        >
            {props.children}
        </RecipesContext.Provider>
    );
}

export default RecipesProvider;