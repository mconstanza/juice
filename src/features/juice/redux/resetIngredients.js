// Rekit uses a new approach to organizing actions and reducers. That is
// putting related actions and reducers in one file. See more at:
// https://medium.com/@nate_wang/a-new-approach-for-managing-redux-actions-91c26ce8b5da

import {
  JUICE_RESET_INGREDIENTS,
} from './constants';

export function resetIngredients() {
  return {
    type: JUICE_RESET_INGREDIENTS,
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case JUICE_RESET_INGREDIENTS:
      return {
        ...state,
        ingredients: {
            ...state.ingredients,
            apples:{
              ...state.ingredients.apples,
              quantity: 0
            },
            carrots:{
              ...state.ingredients.carrots,
              quantity: 0
            },
            ginger:{
              ...state.ingredients.ginger,
              quantity: 0
            },
            pears:{
              ...state.ingredients.pears,
              quantity: 0
            },
            sweetPotatoes:{
              ...state.ingredients.sweetPotatoes,
              quantity: 0
            },
            kaleLeaves:{
              ...state.ingredients.kaleLeaves,
              quantity: 0
            },
            cucumbers:{
              ...state.ingredients.cucumbers,
              quantity: 0
            },
            lemons:{
              ...state.ingredients.lemons,
              quantity: 0
            },
            celerySticks:{
              ...state.ingredients.celerySticks,
              quantity: 0
            }
        }
      };
    default:
      return state;
  }
}