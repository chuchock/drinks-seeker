import React, { createContext, useState } from 'react';


// Create context
export const CategoriesContext = createContext();

// Provider is where functions and state are found
const CategoriesProvider = (props) => {

    // Create context state
    const [hello, setHello] = useState('hellooooo');

    return (
        <CategoriesContext.Provider
            value={{
                hello
            }}
        >
            {props.children}
        </CategoriesContext.Provider>
    )
}

export default CategoriesProvider;