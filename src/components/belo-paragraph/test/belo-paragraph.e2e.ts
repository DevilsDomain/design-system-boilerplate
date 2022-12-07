import { newE2EPage } from '@stencil/core/testing';

describe('belo-paragraph', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<belo-paragraph></belo-paragraph>');

    const element = await page.find('belo-paragraph');
    expect(element).toHaveClass('hydrated');
  });
});
