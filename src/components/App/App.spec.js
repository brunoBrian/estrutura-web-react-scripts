import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';

import { render } from 'enzyme';

import App from '.';

describe('App', () => {
  const component = render(<App />);

  it('Should output a App component', () => {
    expect(component.length).toEqual(1);
  });

  it('Should be a React element', () => {
    expect(ReactTestUtils.isElement(component));
  });
});
