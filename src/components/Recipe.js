import React, { useContext, useState } from 'react';
import { ModalContext } from '../context/ModalContext';

import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';

function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles(theme => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));


const Recipe = ({ recipe }) => {

    // Modal configuration materialui
    const [modalStyle] = useState(getModalStyle);
    const [open, setOpen] = useState(false);

    const classes = useStyles();

    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    };

    // Extract context values
    const { recipeInformation, setRecipeInformation, setIdRecipe } = useContext(ModalContext);

    // Show and format ingredients
    const showIngredients = recipeInformation => {
        let ingredients = [];

        for (let i = 0; i < 16; i++) {
            if (recipeInformation[`strIngredient${i}`]) {
                ingredients.push(
                    <li key={i}>{recipeInformation[`strIngredient${i}`]}
                        {recipeInformation[`strMeasure${i}`]}</li>
                )
            }
        }

        return ingredients;
    }

    return (
        <div className="col-md-4 mb-3">
            <div className="card">
                <h2 className="card-header">{recipe.strDrink}</h2>
                <img className="card-img-top" src={recipe.strDrinkThumb} alt={`${recipe.strDrink} Image`} />
                <div className="card-body">
                    <button
                        type="button"
                        className="btn btn-block btn-primary"
                        onClick={() => {
                            setIdRecipe(recipe.idDrink)
                            handleOpen();
                        }}
                    >
                        See recipe
                    </button>

                    <Modal
                        open={open}
                        onClose={() => {
                            setIdRecipe(null);
                            setRecipeInformation({})
                            handleClose();
                        }}
                    >
                        <div style={modalStyle} className={classes.paper}>
                            <h2>{recipeInformation.strDrink}</h2>
                            <h3 className="mt-4">Instructions for preparation</h3>
                            <p>
                                {recipeInformation.strInstructions}
                            </p>
                            <img className="img-fluid my-4" src={recipeInformation.strDrinkThumb} />
                            <h3>Ingredients and amounts</h3>
                            <ul>
                                {
                                    showIngredients(recipeInformation)
                                }
                            </ul>
                        </div>
                    </Modal>
                </div>
            </div>
        </div>
    );
}

export default Recipe;