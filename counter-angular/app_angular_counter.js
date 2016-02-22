(function(){
  var myApp = angular.module('CounterApp',[]);
  
  myApp.controller('CounterController', function() {
    this.count = 0;
  
    this.click = function(){
      this.count++;
    };
  });
})();