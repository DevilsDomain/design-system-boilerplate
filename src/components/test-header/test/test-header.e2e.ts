import { newE2EPage } from '@stencil/core/testing';

describe('test-header', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<test-header></test-header>');

    const element = await page.find('test-header');
    expect(element).toHaveClass('hydrated');
  });
});
