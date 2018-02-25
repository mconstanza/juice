import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { JuiceList } from 'src/features/home/JuiceList';

describe('home/JuiceList', () => {
  it('renders node with correct class name', () => {
    const props = {
      common: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <JuiceList {...props} />
    );

    expect(
      renderedComponent.find('.home-juice-list').getElement()
    ).to.exist;
  });
});
