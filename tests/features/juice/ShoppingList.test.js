import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { ShoppingList } from 'src/features/juice/ShoppingList';

describe('juice/ShoppingList', () => {
  it('renders node with correct class name', () => {
    const props = {
      juice: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <ShoppingList {...props} />
    );

    expect(
      renderedComponent.find('.juice-shopping-list').getElement()
    ).to.exist;
  });
});
