import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'test-header',
  styleUrl: 'test-header.css',
  shadow: false, //so that design tokens can be used
})
export class TestHeader {

  @Prop({reflect : true})
  size;

  @Prop({reflect : true})
  align: 'left' | 'right' | 'center'

  componentWillLoad() {
    if (this.size < 1 || this.size > 6) {
      throw new Error("TestHeader: the size must be between 1 and 6")
      
    }
  }

  render() {
    const Tag = `h${this.size}`
    return (
      <Host>
        <Tag className={this.align ? `align-${this.align}` : undefined}>
          <slot></slot>
        </Tag>
      </Host>
    );
  }

}
