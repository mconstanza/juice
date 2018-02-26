import { expect } from 'chai';

import {
  JUICE_RESET_INGREDIENTS,
} from 'src/features/juice/redux/constants';

import {
  resetIngredients,
  reducer,
} from 'src/features/juice/redux/resetIngredients';

describe('juice/redux/resetIngredients', () => {
  it('returns correct action by resetIngredients', () => {
    expect(resetIngredients()).to.have.property('type', JUICE_RESET_INGREDIENTS);
  });

  it('handles action type JUICE_RESET_INGREDIENTS correctly', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: JUICE_RESET_INGREDIENTS }
    );
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state).to.deep.equal(prevState); // TODO: replace this line with real case.
  });
});
