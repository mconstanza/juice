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
          apples: state.apples + action.quantity,
        }
        case "Carrots":
          return {
          ...state,
          carrots: state.carrots + action.quantity,
        }
        case "Ginger":
          return {
          ...state,
          ginger: state.ginger + action.quantity,
        }
        case "Pears":
          return {
          ...state,
          pears: state.pears + action.quantity,
        }
        case "Sweet Potatoes":
          return {
          ...state,
          sweetPotatoes: state.sweetPotatoes + action.quantity,
        }
        case "Kale Leaves":
          return {
          ...state,
          kaleLeaves: state.kaleLeaves + action.quantity,
        }
        case "Cucumbers":
          return {
          ...state,
          cucumbers: state.cucumbers + action.quantity,
        }
        case "Celery Sticks":
          return {
          ...state,
          celerySticks: state.celerySticks + action.quantity,
        }
        case "Lemons":
          return {
          ...state,
          lemons: state.lemons + action.quantity,
        }
        default:
          return state;
      }
    default:
      return state;
  }
}
