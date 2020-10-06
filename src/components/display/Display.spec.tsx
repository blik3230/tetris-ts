import React from 'react';
import { render } from '@testing-library/react';
import Display from './Display';

describe('Display', () => {
  it('renders empty wrapper if received empty array by default', () => {
    const { asFragment } = render(<Display/>);

    expect(asFragment()).toMatchSnapshot();
  })

  it('renders grid of items from passed screenData array of boolean arrays', (done) => {
    const screenData = [
      [false, false, false, false, false, false],
      [false, false, false, false, false, false],
      [false, false, false, false, false, false],
      [false, false, false, false, false, false],
      [false, false, false, false, false, false],
      [false, false, false, false, false, false],
    ];

    const { container } = render(<Display screenData={ screenData }/>);

    const displayEl = container.querySelector('.Display')!;

    const lineEls = displayEl.querySelectorAll('.Display__line');

    expect(lineEls.length).toBe(6);

    for (const lineEl of lineEls) {
      const items = lineEl.querySelectorAll('.Display__item');

      expect(items.length).toBe(6);
    }

    done();
  });

  it('renders active items where items are truly', () => {
    const screenData = [
      [true, false, false, false, false],
      [true, true, false, false, false],
      [true, true, true, false, false],
      [true, true, true, true, false],
      [true, true, true, true, true],
    ];

    const { container } = render(<Display screenData={ screenData }/>);

    const displayEl = container.querySelector('.Display')!;
    const lineEls = displayEl.querySelectorAll('.Display__line')!;
    const expectedArr = [];

    for(const lineEl of lineEls) {
      const lineArr = [];
      const lineItemEls = lineEl.querySelectorAll('.Display__item');
      for(const itemEl of lineItemEls) {
        lineArr.push(itemEl.classList.contains('Display__item_active'));
      }
      expectedArr.push(lineArr);
    }

    expect(expectedArr).toEqual(screenData);
  });
});