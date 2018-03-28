// Rekit uses a new approach to organizing actions and reducers. That is
// putting related actions and reducers in one file. See more at:
// https://medium.com/@nate_wang/a-new-approach-for-managing-redux-actions-91c26ce8b5da

import {
  JUICE_ADD_INGREDIENT,
} from './constants';

export function addIngredient(ingredient, quantity) {
  console.log(ingredient, quantity)
  return {
    type: JUICE_ADD_INGREDIENT,
    ingredient: ingredient,
    quantity: quantity,
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case JUICE_ADD_INGREDIENT:
      switch (action.ingredient) {
        case "Apples":
          return {
          ...state,
          ingredients: {
            ...state.ingredients,
            apples:{
              ...state.ingredients.apples,
              quantity: state.ingredients.apples.quantity + action.quantity,
            }
          }
        }
        case "Carrots":
          return {
          ...state,
          ingredients: {
            ...state.ingredients,
            carrots:{
              ...state.ingredients.carrots,
              quantity: state.ingredients.carrots.quantity + action.quantity,
            }
          }
        }
        case "Ginger":
          return {
          ...state,
          ingredients: {
            ...state.ingredients,
            ginger:{
              ...state.ingredients.ginger,
              quantity: state.ingredients.ginger.quantity + action.quantity,
            }
          }
        }
        case "Pears":
          return {
          ...state,
          ingredients: {
            ...state.ingredients,
            pears:{
              ...state.ingredients.pears,
              quantity: state.ingredients.pears.quantity + action.quantity,
            }
          }
        }
        case "Sweet Potatoes":
          return {
          ...state,
          ingredients: {
            ...state.ingredients,
            sweetPotatoes:{
              ...state.ingredients.sweetPotatoes,
              quantity: state.ingredients.sweetPotatoes.quantity + action.quantity,
            }
          }
        }
        case "Kale Leaves":
          return {
          ...state,
          ingredients: {
            ...state.ingredients,
            kaleLeaves:{
              ...state.ingredients.kaleLeaves,
              quantity: state.ingredients.kaleLeaves.quantity + action.quantity,
            }
          }
        }
        case "Cucumbers":
          return {
          ...state,
          ingredients: {
            ...state.ingredients,
            cucumbers:{
              ...state.ingredients.cucumbers,
              quantity: state.ingredients.cucumbers.quantity + action.quantity,
            }
          }
        }
        case "Celery Sticks":
          return {
          ...state,
          ingredients: {
            ...state.ingredients,
            celerySticks:{
              ...state.ingredients.celerySticks,
              quantity: state.ingredients.celerySticks.quantity + action.quantity,
            }
          }
        }
        case "Lemons":
          return {
          ...state,
          ingredients: {
            ...state.ingredients,
            lemons:{
              ...state.ingredients.lemons,
              quantity: state.ingredients.lemons.quantity + action.quantity,
            }
          }
        }
        case "Mint":
          return {
          ...state,
          ingredients: {
            ...state.ingredients,
            mint:{
              ...state.ingredients.mint,
              quantity: state.ingredients.mint.quantity + action.quantity,
            }
          }
        }
        case "Limes":
          return {
          ...state,
          ingredients: {
            ...state.ingredients,
            limes:{
              ...state.ingredients.limes,
              quantity: state.ingredients.limes.quantity + action.quantity,
            }
          }
        }
        case "Spinach":
          return {
          ...state,
          ingredients: {
            ...state.ingredients,
            spinach:{
              ...state.ingredients.spinach,
              quantity: state.ingredients.spinach.quantity + action.quantity,
            }
          }
        }
        default:
          return state;
      }
    default:
      return state;
  }
}
