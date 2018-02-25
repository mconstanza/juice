import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { JuiceRecipes } from 'src/features/juice/JuiceRecipes';

describe('juice/JuiceRecipes', () => {
  it('renders node with correct class name', () => {
    const props = {
      juice: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <JuiceRecipes {...props} />
    );

    expect(
      renderedComponent.find('.juice-juice-recipes').getElement()
    ).to.exist;
  });
});
