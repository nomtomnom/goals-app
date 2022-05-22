import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import './components/HeaderComponent.js';

@customElement('goals-app')
export class GoalsApp extends LitElement {
  @property({ type: String }) title = 'My app';

  static styles = css`
    main {
      background-color: grey;
    }
  `;

  render() {
    return html`
      <header-component></header-component>
      <main>
        ${this.title}
      </main>
    `;
  }
}
