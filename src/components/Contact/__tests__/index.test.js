import React from 'react';
import { render, cleanup, getByTestId } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Contact from '..';

//const mockContactForm = jest.fn();

afterEach(cleanup);

describe('Contact component', () => {
  it('renders', () => {
    render(<Contact />);
  });
  it('matches snapshot', () => {
    const { asFragment } = render(<Contact />);
    expect(asFragment()).toMatchSnapshot();
  })
})

it('renders', () => {
  const { getByTestId } = render(<Contact />)
  expect(getByTestId('header')).toHaveTextContent('Contact me');
})

it('renders', () => {
  const { getByTestId } = render(<Contact />)
  expect(getByTestId('button')).toHaveTextContent('Submit')
})