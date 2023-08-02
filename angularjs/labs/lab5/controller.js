/**
 REF  https://www.geeksforgeeks.org/angularjs-factory-method/ , 
  REF https://tutorialedge.net/javascript/angularjs/angularjs-factory-tutorial/
 */

app.controller('myCtrl', function($scope , myService) {
  $scope.testdata = "@testdata";
  $scope.getRefUrl = function(){
    return [
          'https://www.geeksforgeeks.org/angularjs-factory-method/' , 
          'https://tutorialedge.net/javascript/angularjs/angularjs-factory-tutorial/'
          ];
  }
  $scope.fromFactory = function(){
    return myService.getMyMsg();
  } 
  $scope.get_count = function(){
    return myService.getCounter();
  }
  $scope.inc_count = function(){
    myService.counterAdd1();
  }
 });