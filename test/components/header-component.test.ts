import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';

import { HeaderComponent } from '../../src/components/HeaderComponent.js';

describe('Header Component', () => {
  let element: HeaderComponent;
  beforeEach(async () => {
    element = await fixture(html`<header-component></header-component>`);
  });

  it('renders a h1', () => {
    const h1 = element.shadowRoot!.querySelector('h1')!;
    expect(h1).to.exist;
  });

  it('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});