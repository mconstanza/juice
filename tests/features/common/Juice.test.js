import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { Juice } from 'src/features/common';

describe('common/Juice', () => {
  it('renders node with correct class name', () => {
    const renderedComponent = shallow(
      <Juice />
    );

    expect(
      renderedComponent.find('.common-juice').getElement()
    ).to.exist;
  });
});
