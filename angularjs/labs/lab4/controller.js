/**
 REF  https://www.geeksforgeeks.org/angularjs-factory-method/ , 
  REF https://tutorialedge.net/javascript/angularjs/angularjs-factory-tutorial/
 */

app.controller('myCtrl', function($scope , myFactory) {
  $scope.testdata = "@testdata";
  $scope.getRefUrl = function(){
    return [
          'https://www.geeksforgeeks.org/angularjs-factory-method/' , 
          'https://tutorialedge.net/javascript/angularjs/angularjs-factory-tutorial/'
          ];
  }
  $scope.fromFactory = function(){
    return myFactory.getMyMsg();
  } 
  $scope.get_count = function(){
    return myFactory.getCounter();
  }
  $scope.inc_count = function(){
    myFactory.counterAdd1();
  }
 });