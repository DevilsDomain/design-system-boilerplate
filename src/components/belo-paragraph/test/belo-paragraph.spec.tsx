import { newSpecPage } from '@stencil/core/testing';
import { BeloParagraph } from '../belo-paragraph';

describe('belo-paragraph', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [BeloParagraph],
      html: `<belo-paragraph></belo-paragraph>`,
    });
    expect(page.root).toEqualHtml(`
      <belo-paragraph>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </belo-paragraph>
    `);
  });
});
