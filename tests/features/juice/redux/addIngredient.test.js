import { expect } from 'chai';

import {
  JUICE_ADD_INGREDIENT,
} from 'src/features/juice/redux/constants';

import {
  addIngredient,
  reducer,
} from 'src/features/juice/redux/addIngredient';

describe('juice/redux/addIngredient', () => {
  it('returns correct action by addIngredient', () => {
    expect(addIngredient()).to.have.property('type', JUICE_ADD_INGREDIENT);
  });

  it('handles action type JUICE_ADD_INGREDIENT correctly', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: JUICE_ADD_INGREDIENT }
    );
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state).to.deep.equal(prevState); // TODO: replace this line with real case.
  });
});
