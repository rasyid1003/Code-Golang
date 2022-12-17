
import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import './shared-styles.js';

class MyView2 extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;

          padding: 10px;
        }
      </style>

      <div class="card">
        <div class="circle">2</div>
        <h1>Message</h1>
     <h1>Your Message</h1>
     <p>Ini Adalah Pesan Rahasia</p>
     <p>Username Yg dimasukan Pada Halaman login-page Adalah Admin</p>

      </div>
    `;
  }
}

window.customElements.define('mesage-page', MyView2);
