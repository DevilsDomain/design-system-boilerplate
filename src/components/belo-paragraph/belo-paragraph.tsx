import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'belo-paragraph',
  styleUrl: 'belo-paragraph.css',
  shadow: true,
})
export class BeloParagraph {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
