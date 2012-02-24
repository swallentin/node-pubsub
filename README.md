# node-pubsub 

A port of bloody-jquery-plugins pubsub functionality. https://github.com/phiggins42/bloody-jquery-plugins

This is simple pubsub feature to be used in node.

## pubsub.js
  
  var pubsub = require('node-pubsub');
  
  pubsub.subscribe('/mychannel', function( message ){
    console.log(message);
  });
  pubsub.publish('mychannel', [ { message: 'my message'}], this);
  
Ambiguous communication plugin. Small API surface. Publish some message to listeners.

# License

Being stolen directly from the Dojo Toolkit source, these plugins are released under a dual AFL/BSD license identical to Dojo proper. See http://dojotoolkit.org/license for more information.