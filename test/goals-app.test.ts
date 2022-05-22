import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';

import { GoalsApp } from '../src/GoalsApp.js';
import '../src/goals-app.js';

describe('GoalsApp', () => {
  let element: GoalsApp;
  beforeEach(async () => {
    element = await fixture(html`<goals-app></goals-app>`);
  });

  it('renders a h1', () => {
    const h1 = element.shadowRoot!.querySelector('h1')!;
    expect(h1).to.exist;
    expect(h1.textContent).to.equal('My app');
  });

  it('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
