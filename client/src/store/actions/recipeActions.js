import * as actionTypes from './actionTypes';
import history from '../../history';

export const addRecipeStart = () => {
    return {
        type: actionTypes.ADD_RECIPE_START
    };
};

export const addRecipeSuccess = ( recipe ) => {
  history.push('/recipes')
    return {
        type: actionTypes.ADD_RECIPE_SUCCESS,
        recipeTitle: recipe.title,
        recipeCategory: recipe.category,
        recipeingredients: recipe.ingredients
    };
};

export const addRecipeFail = (errors) => {
  history.push('/new-recipe')
    return {
        type: actionTypes.ADD_RECIPE_FAIL,
        errors: errors
    };
};

export const addRecipe = (title, ingredients, category) => {
  return dispatch => {
    dispatch(addRecipeStart());
    const recipeData = {
      recipe: {
        title: title,
        ingredients: ingredients,
        category: category,
        user_id: localStorage.getItem('userId')
      }
    };
    let url = 'http://localhost:3001/api/recipes';
    const token = localStorage.getItem('token')
    fetch(url, {
            method: "POST",
            mode: "cors",
            credentials: "same-origin",
            headers: {
              'Authorization': `Bearer + ${token}`,
              'Content-Type': 'application/json; charset=utf-8"d'
            },
            body: JSON.stringify(recipeData),
        })
        .then( response => {
          return response.json()
        })
        .then( json => {
          if (json.status === 400) { throw json }
          dispatch(addRecipeSuccess(json.recipe))
        })
        .catch(err => {
            dispatch(addRecipeFail(err.errors));
        });
  }
}
