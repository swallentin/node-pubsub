var pubsub = exports = module.exports = {};

pubsub.create = function() {
  var self = this;
  
  var cache = {};

  this.publish = function(/* String */topic, /* Array? */args){
  	cache[topic] && each(cache[topic], function(){
  		this.apply(args || []);
  	});
  };

  this.subscribe = function(/* String */topic, /* Function */callback){
  	if(!cache[topic]){
  		cache[topic] = [];
  	}
  	cache[topic].push(callback);
  	return [topic, callback]; // Array
  };

  this.unsubscribe = function(/* Array */handle){	
  	var t = handle[0];
  	cache[t] && each(cache[t], function(idx){
  		if(this == handle[1]){
  			cache[t].splice(idx, 1);
  		}
  	});
};