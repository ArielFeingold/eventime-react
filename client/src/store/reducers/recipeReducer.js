import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    recipeId: "",
    recipeTitle: "",
    recipeingredients: "",
    recipeCategory: "",
    errors: "",
    loading: false,
};

const addRecipeStart = ( state, action ) => {
    return updateObject( state, { error: null, loading: true } );
};

const addRecipeSuccess = (state, action) => {
    return updateObject( state, {
        recipeId: action.recipeId,
        recipeTitle: action.recipeTitle,
        recipeDescription: action.recipeDescription,
        recipeCategory: action.recipeCategory,
        errors: null,
        loading: false,
        newWorkout: true
     } );
};

const addRecipeFail = (state, action) => {
    return updateObject( state, {
        errors: action.errors,
        loading: false
    });
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.ADD_RECIPE_START: return addRecipeStart(state, action);
        case actionTypes.ADD_RECIPE_SUCCESS: return addRecipeSuccess(state, action);
        case actionTypes.ADD_RECIPE_FAIL: return addRecipeFail(state, action);


        default:
            return state;
    }
};

export default reducer;
