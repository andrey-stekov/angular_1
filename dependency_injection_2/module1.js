angular
  .module('Module1', ['Module2'])
  .controller('MyController1', ['$scope', function($scope){
    this.var1 = 'Val1';
  }]);