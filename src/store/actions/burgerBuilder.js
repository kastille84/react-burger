import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';

export const addIngredient = (ingName) => {
    return {
        type: actionTypes.ADD_INGREDIENT,
        ingredientName: ingName
    }
}
export const removeIngredient = (ingName) => {
    return {
        type: actionTypes.REMOVE_INGREDIENT,
        ingredientName: ingName
    }
}

// ASYNC action
    //Will just return the action
    export const setIngredients = (ingredients) => {
        return {
            type: actionTypes.SET_INGREDIENTS,
            ingredients: ingredients
        }
    }

    // needed action in case of ERROR RESPONSE
    export const fetchIngredientsFailed = () => {
        return {
            type: actionTypes.FETCH_INGREDIENTS_FAILED
        }
    }

        // Where the ASYNC happens
    export const initIngredients = () => {
        return (dispatch) => {
            // here' we can dispatch async code.. so we'll use the function above
            // 
            axios.get('https://react-my-burger-a8450.firebaseio.com/ingredients.json')
            .then(response => {
                //once we get data from server, dispatch our action
                dispatch(setIngredients(response.data));                
            })
            .catch(e=>{
                dispatch(fetchIngredientsFailed());
            });
        }
    }