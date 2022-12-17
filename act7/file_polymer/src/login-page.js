
import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import './shared-styles.js';

class MyView1 extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;

          padding: 10px;
        }
      </style>

      <div class="card">
        <div class="circle">1</div>
        <h1>Login</h1>
    <label for="email"><b>Email</b></label>
     <input type="text" placeholder="Enter Email" name="email" id="email" required>
 
     <label for="psw"><b>Password</b></label>
     <input type="password" placeholder="Enter Password" name="psw" id="psw" required>
 
     <button type="submit" class="registerbtn">LOGIN</button>
      </div>
    `;
  }
}

window.customElements.define('login-page', MyView1);
