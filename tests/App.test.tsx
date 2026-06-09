import { describe, expect, test } from 'vitest';
import { render } from 'vitest-browser-react';
import { App } from '../src/App.tsx';

describe('App', () => {
  test('App should render', async () => {
    const { baseElement } = await render(<App />);
    expect(
      Array.prototype.every.call(
        baseElement.getElementsByClassName('hello'),
        (element: HTMLElement) => element.innerText === 'Hello world!',
      ),
    ).toBe(true);
  });
});
