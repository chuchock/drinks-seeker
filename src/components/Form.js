import React, { useContext, useState } from 'react';
import { CategoriesContext } from '../context/CategoriesContext';
import { RecipesContext } from '../context/RecipesContext';

const Form = () => {

  const [find, setFind] = useState({
    name: '',
    category: ''
  });

  const { categories } = useContext(CategoriesContext);
  const { setFindRecipes } = useContext(RecipesContext);

  // Function to read the contents
  const getRecipeData = e => {
    setFind({
      ...find,
      [e.target.name]: e.target.value
    })
  }

  return (
    <form
      className="col-md-12"
      onSubmit={e => {
        e.preventDefault();
        setFindRecipes(find);
      }}
    >
      <fieldset className="text-center">
        <legend>Find drinks by category or ingredient</legend>
      </fieldset>

      <div className="row mt-4">
        <div className="col-md-4">
          <input
            name="name"
            className="form-control"
            type="text"
            placeholder="Find by ingredient"
            onChange={getRecipeData}
          />
        </div>

        <div className="col-md-4">
          <select
            name="category"
            className="form-control"
            onChange={getRecipeData}
          >
            <option value="">Choose category</option>
            {categories &&
              categories.map(category => {
                return (<option
                  key={category.strCategory}
                  value={category.strCategory}
                >
                  {category.strCategory}
                </option>)
              })
            }
          </select>
        </div>

        <div className="col-md-4">
          <input
            className="btn btn-block btn-primary"
            type="submit"
            value="Find drinks"
          />
        </div>
      </div>
    </form>
  );
}

export default Form;