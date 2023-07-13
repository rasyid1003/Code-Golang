
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
<script>
    class LoginPage extends Polymer.Element {
      static get is() { return 'login-page'; }
      static get properties() {
        return {
          username: String,
          password: String,
          isAdmin: {
            type: Boolean,
            notify: true,
          },
        };
      }

      handleChange(e) {
        this[e.target.name] = e.target.value;
      }

      handleSubmit(e) {
        if(this.username === 'reza' && this.password === 'rasyid') {
          this.isAdmin = true;
          window.history.pushState({}, null, '/message-page');
          window.dispatchEvent(new CustomEvent('location-changed'));
          return;
        }

        this.isAdmin = false;
        alert('Mohon Login sebagai Admin');
      }
    }

    window.customElements.define(LoginPage.is, LoginPage);
  </script>
window.customElements.define('login-page', MyView1);
