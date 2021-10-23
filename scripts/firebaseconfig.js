//import { CLIENT_RENEG_WINDOW } from "tls";

(function (window) {
  'use strict';
  var App = window.App || {};

  var firebaseconfig = {
    apiKey: "AIzaSyDezl_cum2SrGaEnKbGd_azPIDvwv4r_5c",
    authDomain: "coffeerun-1e3df.firebaseapp.com",
    projectId: "coffeerun-1e3df",
    storageBucket: "coffeerun-1e3df.appspot.com",
    messagingSenderId: "399170150658",
    appId: "1:399170150658:web:a80d5e9b1eeb47378e221b",
    measurementId: "G-FZHST1RLM6"
  };

  App.firebaseconfig = firebaseconfig;
  firebase.initializeApp(App.firebaseconfig);

  window.App = App;
})(window);