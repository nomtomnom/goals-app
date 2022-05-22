import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';

import { GoalsApp } from '../src/GoalsApp.js';

describe('GoalsApp', () => {
  let element: GoalsApp;
  beforeEach(async () => {
    element = await fixture(html`<goals-app></goals-app>`);
  });

  it('renders a header', () => {
    const header = element.shadowRoot!.querySelector('header-component')!;
    expect(header).to.exist;
  });

  it('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
