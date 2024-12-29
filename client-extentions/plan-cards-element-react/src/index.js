import React from 'react';
import ReactDOM from 'react-dom/client';  // Use `react-dom/client` instead of `react-dom`
import App from './App';  // Make sure to import your App component

class WebComponent extends HTMLElement {
  connectedCallback() {
    // Create root using ReactDOM.createRoot and render the app
    const root = ReactDOM.createRoot(this);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  }

  disconnectedCallback() {
    // Unmount the component using root.unmount
    const root = ReactDOM.createRoot(this);
    root.unmount();
  }
}

const ELEMENT_NAME = 'plan-cards-element-react';

if (customElements.get(ELEMENT_NAME)) {
  // eslint-disable-next-line no-console
  console.log(`Skipping registration for <${ELEMENT_NAME}> (already registered)`);
} else {
  customElements.define(ELEMENT_NAME, WebComponent);
}
