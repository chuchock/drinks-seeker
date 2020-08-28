import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const RecipesContext = createContext();

const RecipesProvider = (props) => {

    const [recipes, setRecipes] = useState([]);

    const [findRecipes, setFindRecipes] = useState({
        name: '',
        category: ''
    });

    const [callApi, setCallApi] = useState(false);

    const { name, category } = findRecipes;

    useEffect(() => {
        if (callApi) {
            const getRecipes = async () => {
                const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${name}&c=${category}`
                const result = await axios.get(url);
                setRecipes(result.data.drinks);
            }

            getRecipes();
        }
    }, [findRecipes]);

    return (
        <RecipesContext.Provider
            value={{
                recipes,
                setFindRecipes,
                setCallApi
            }}
        >
            {props.children}
        </RecipesContext.Provider>
    );
}

export default RecipesProvider;