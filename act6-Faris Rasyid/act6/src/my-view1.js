/**
 *Faris Rasyid
 *50421483
 *2IA22
 */
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
    <h1>Register</h1>
    <p>Isi Semua Form Untuk Membuat account.</p>
    <hr>

    <label for="email"><b>Email</b></label>
    <input type="text" placeholder="Enter Email" name="email" id="email" required>

    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" id="psw" required>

    <label for="psw-repeat"><b>Repeat Password</b></label>
    <input type="password" placeholder="Repeat Password" name="psw-repeat" id="psw-repeat" required>
    <hr>

    <p>Pelajari Ketentuan Sebelum Membuat akun <a href="#">Syarat & Ketentuan</a>.</p>
    <button type="submit" class="registerbtn">Register</button>
  </div>

  <div class="container signin">
    <p>Sudah Punya account? <a href="#">Login</a>.</p>
  </div>
      </div>
    `;
  }
}

window.customElements.define('my-view1', MyView1);
