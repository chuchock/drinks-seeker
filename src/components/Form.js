import React, { useContext } from 'react';
import { CategoriesContext } from '../context/CategoriesContext';

const Form = () => {

    const { categories } = useContext(CategoriesContext);

    return (
        <form
            className="col-md-12"
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
                    />
                </div>

                <div className="col-md-4">
                    <select
                        name="category"
                        className="form-control"
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