import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { JuiceList } from 'src/features/juice/JuiceList';

describe('juice/JuiceList', () => {
  it('renders node with correct class name', () => {
    const props = {
      juice: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <JuiceList {...props} />
    );

    expect(
      renderedComponent.find('.juice-juice-list').getElement()
    ).to.exist;
  });
});
