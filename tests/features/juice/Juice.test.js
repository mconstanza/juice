import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { Juice } from 'src/features/juice/Juice';

describe('juice/Juice', () => {
  it('renders node with correct class name', () => {
    const props = {
      juice: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <Juice {...props} />
    );

    expect(
      renderedComponent.find('.juice-juice').getElement()
    ).to.exist;
  });
});
