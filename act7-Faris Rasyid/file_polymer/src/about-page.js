
import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import './shared-styles.js';

class MyView3 extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;

          padding: 10px;
        }
      </style>

      <div class="card">
        <div class="circle">3</div>
        <h1>About</h1>
        <p>Pada pertemuan 7 ini kita belajar clien side routing</p>
        <p>Nama : Faris Rasyid</p>
        <p>Npm  : 50421483    </p>
        <p>Kelas: 2IA22       </p>
      </div>
    `;
  }
}

window.customElements.define('about-page', MyView3);
