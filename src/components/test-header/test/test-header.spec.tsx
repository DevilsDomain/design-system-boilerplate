import { newSpecPage } from '@stencil/core/testing';
import { TestHeader } from '../test-header';

describe('test-header', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [TestHeader],
      html: `<test-header></test-header>`,
    });
    expect(page.root).toEqualHtml(`
      <test-header>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </test-header>
    `);
  });
});
