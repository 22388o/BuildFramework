app._load();


'use strict';

const App = require('../types/app');

const Person = require('../resources/person');
const Post = require('../resources/post');
const Relationship = require('../resources/relationship');

window.app = new App({
  scripts: ['app.js'],
  resources: {
    'Person': Person,
    'Post': Post,
    'Relationship': Relationship,
  },
  authorities: {
    
  }
});

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/service.js').then(function(registration) {
      console.log('[GUARDIAN]', 'ready: ', registration.scope);
    }, function(err) {
      console.log('[GUARDIAN]', 'failed: ', err);
    });
  });
}

window.onload = function () {
  app.attach(document.querySelector('fabric-application'));
  
   /*/
  app._defer('localhost:3000');
  /*/
  app._defer('maki.io');
  /**/

  app._explore();
}
