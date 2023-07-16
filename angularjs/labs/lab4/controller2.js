/**
 REF  https://www.geeksforgeeks.org/angularjs-factory-method/ , 
  REF https://tutorialedge.net/javascript/angularjs/angularjs-factory-tutorial/
 */

app.controller('myCtrl2', function($scope , myFactory) {
  $scope.testdata = "@testdata of myCtrl2";
  $scope.new_msg = "(new msg)";
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
  $scope.set_factory_text = function(){
    // alert(1);
    // alert($scope.new_msg);
    myFactory.setMSG($scope.new_msg);
    $scope.new_msg = "(new msg) " + Math.floor(Math.random()*10000);
    // alert(2);
  }
 });