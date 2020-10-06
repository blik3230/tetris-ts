import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});


// todo: функция которая принимает два массива
//  и накладывает один на другой причем можно
//  указать координаты укладования расширяя при этом массивы. Например:
//  1 1 1                           0 0 0 0
//  1 1 1   c координатами 3,5  +   0 0 0 0 c координатами 0,0 =
//  1 1 1                           0 0 0 0
//  ============================================================
//  0 0 0 0 0 0
//  0 0 0 0 0 0
//  0 0 0 0 0 0
//  0 0 0 0 0 0
//  0 0 0 0 0 0
//  0 0 0 1 1 1
//  0 0 0 1 1 1
//  0 0 0 1 1 1
