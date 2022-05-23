import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('view-one')
export class ViewOne extends LitElement {
  render() {
    return html`
      <div>
        View One
      </div>
    `;
  }
}