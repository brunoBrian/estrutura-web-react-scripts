import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';

import { render } from 'enzyme';

import Title from '.';

describe('App', () => {
  const component = render(<Title />);

  it('Should output a App component', () => {
    expect(component.length).toEqual(1);
  });

  it('Should be a React element', () => {
    expect(ReactTestUtils.isElement(component));
  });
});
