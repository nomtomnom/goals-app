import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

import './views/View1.js';
import './views/View2.js';

import './components/HeaderComponent.js';

// to-do: make a proper router lol
const routes = [
  { path: '/', view: html`<div>HOME</div>`, name: 'Home' },
  { path: '/viewOne', view: html`<view-one></view-one>`, name: 'ViewOne' },
  { path: '/viewTwo', view: html`<view-two></view-two>`, name: 'ViewTwo' }
]

@customElement('goals-app')
export class GoalsApp extends LitElement {
  @property({ type: String }) title = 'My app';

  @state() route = '/';

  @state() view: any = html`<div>HOME</div>`;

  static styles = css`
    main {
      background-color: grey;
    }
  `;

  updated() {
    console.log('this.route', this.route);

    const filterRoute = routes.filter(route => route.path === this.route ? route.view : null)
    console.log('filter route', filterRoute);
    this.view = filterRoute.pop();
  }

  _handleNavHeaderEvent(e: CustomEvent) {
    e.preventDefault();

    console.log('event consumed', e);
    this.route = e.detail.path;
    window.history.pushState({}, '', e.detail.path);
    this.requestUpdate();
  }


  render() {
    return html`
      <header-component
        .routes=${routes}
        @nav-header-event=${this._handleNavHeaderEvent}
      ></header-component>
      <main>
        ${this.title}
        Current Path: ${this.route}
        ${this.view}
      </main>
    `;
  }
}
