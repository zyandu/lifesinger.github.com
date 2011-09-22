
seajs.config({
  debug: 2
});


define(function() {

  var rules = [];


  // markzhi
  rules.push([
    'http://markzhi.com/assets/',
    'http://localhost/~lifesinger/markzhi/portal/src/main/webapp/assets/'
  ]);


  // tms
  rules.push([
    'http://assets.taobaocdn.com/apps/tms/',
    'http://localhost/~lifesinger/svn/assets/apps/tms/'
  ]);

  // bigrender
  rules.push([
    'http://a.tbcdn.cn/p/shop/1.0/bigrender.js',
    'http://localhost/~lifesinger/svn/assets/p/shop/1.0/bigrender.js'
  ]);
  
  // modules
//  rules.push([
//    /^http:\/\/a\.tbcdn\.cn\/libs\/(.*)\.js$/,
//    'http://localhost/~lifesinger/modules/$1-debug.js'
//  ]);


  // map rules
  seajs.config({'map': rules});

});