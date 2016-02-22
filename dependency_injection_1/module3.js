angular
  .module('Module3', ['Module2'])
  .controller('Controller3', ['$scope', function($scope){
    $scope.var3 = 'Val3';
  }]);