/**
 *Faris Rasyid
 *50421483
 *2IA22
 */
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
 
       <h1>Login</h1>
     <p>Isi Semua Form Untuk Membuat account.</p>
     <hr>
 
     <label for="email"><b>Email</b></label>
     <input type="text" placeholder="Enter Email" name="email" id="email" required>
 
     <label for="psw"><b>Password</b></label>
     <input type="password" placeholder="Enter Password" name="psw" id="psw" required>
 
     <button type="submit" class="registerbtn">LOGIN</button>
   </div>
 
   <div class="container signin">
     <p>Belum Punya Account? <a href="#">Registrasi</a>.</p>
   </div>
       </div>
     `;
   }
 }
 
 window.customElements.define('my-view2', MyView2);
 