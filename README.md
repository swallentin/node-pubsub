# node-pubsub 

  A port of bloody-jquery-plugins pubsub functionality. https://github.com/phiggins42/bloody-jquery-plugins

  This is simple pubsub feature to be used in node.

    var pubsub = require('node-pubsub');

    pubsub.subscribe('/mychannel', function( message ){
      console.log(message);
    });
    pubsub.publish('/mychannel', [ { message: 'my message'}], this);
    
    pubsub.unsubscribe('mychanne');

## Installation
  
    $ npm install node-pubsub
  
or to install the node-pubsub package globally:

    $ npm install node-pubsub -g

## Quick Start

  The fastest way to get started is to
  
    Install the library:
    
      $npm install node-pubsub
  
    Open up app.js and add:
  
    var pubsub = require('node-pubsub');
  
    pubsub.subscribe('/mychannel', function( message ){
      console.log(message);
    });
    pubsub.publish('/mychannel', [ { message: 'my message'}], this);
  
  Ambiguous communication plugin. Small API surface. Publish some message to listeners.

## Features

  * Publishing to events to to a channel
  * Subscribing events from a channel
  * Unsubscribing from a channel

# License

  Being stolen directly from the Dojo Toolkit source/bloody-jquery-plugins, this code is released under a dual AFL/BSD license identical to Dojo proper. See http://dojotoolkit.org/license for more information.