import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('view-two')
export class ViewTwo extends LitElement {
  render() {
    return html`
      <div>
        View Two
      </div>
    `;
  }
}