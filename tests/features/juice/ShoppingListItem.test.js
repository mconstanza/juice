import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { ShoppingListItem } from 'src/features/juice/ShoppingListItem';

describe('juice/ShoppingListItem', () => {
  it('renders node with correct class name', () => {
    const props = {
      juice: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <ShoppingListItem {...props} />
    );

    expect(
      renderedComponent.find('.juice-shopping-list-item').getElement()
    ).to.exist;
  });
});
