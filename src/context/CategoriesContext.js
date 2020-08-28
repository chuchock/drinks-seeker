import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';


// Create context
export const CategoriesContext = createContext();

// Provider is where functions and state are found
const CategoriesProvider = (props) => {

    // Create context state
    const [categories, setCategories] = useState([]);

    // call API
    useEffect(() => {
        const getCategories = async () => {
            const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
            const categories = await axios.get(url);
            setCategories(categories.data.drinks);
        }

        getCategories();
    }, [])

    return (
        <CategoriesContext.Provider
            value={{
                categories
            }}
        >
            {props.children}
        </CategoriesContext.Provider>
    )
}

export default CategoriesProvider;