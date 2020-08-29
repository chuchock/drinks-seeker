import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

// Create context
export const ModalContext = createContext();

const ModalProvider = (props) => {

    const [idRecipe, setIdRecipe] = useState(null);

    const [recipeInformation, setRecipeInformation] = useState({})

    // Call API
    useEffect(() => {
        const getRecipe = async () => {
            if (!idRecipe) return;

            const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idRecipe}`;
            const response = await axios.get(url);
            setRecipeInformation(response.data.drinks[0]);
        }

        getRecipe();
    }, [idRecipe]);

    return (
        <ModalContext.Provider
            value={{
                recipeInformation,
                setIdRecipe,
                setRecipeInformation
            }}
        >
            {props.children}
        </ModalContext.Provider>
    );
}

export default ModalProvider;

