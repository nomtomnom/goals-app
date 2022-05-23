import { LitElement, html, css, TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';

type Route = {
  path: string,
  view: TemplateResult<1>,
  name: string
}

@customElement('header-component')
export class HeaderComponent extends LitElement {
  @property({ type: Array }) routes: Route[]  = [];

  @property({ type: String }) currentRoute = '/';

  static styles = css`
    header {
      display: flex;
      gap: 1em;
    }
  `;

  private _clickHeaderLink(route: Route) {
    console.log('click header route', route);
    // this.currentRoute = route.path;
    const navEvent = new CustomEvent('nav-header-event', {
      detail: {
        ...route
      }
    });
    this.dispatchEvent(navEvent);
  }

  render () {
    return html`
      <header>
        <h1>
          Header
        </h1>

        ${
          this.routes.map(route => html`<button @click=${() => this._clickHeaderLink(route)}>${route.name}</button>`)
        }
      </header>
    `;
  }
}