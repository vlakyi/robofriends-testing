import React from 'react';
import { shallow } from 'enzyme';
import Card from '../components/Cards/Card';

it('renders without crashing', () => {
  expect(shallow(<Card/>)).toMatchSnapshot();
});