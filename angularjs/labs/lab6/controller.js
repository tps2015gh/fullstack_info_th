app.controller('myCtrl', function($scope,$http) {
    $scope.data = "@data";
    $scope.data_users = [];
    $scope.fn_data = function() {
      return $scope.data + "... as function() ";
    };
    $scope.load_http = function(){ 
        $http.get("data-test.json").then(function(response) {
            $scope.data = response.data;
            alert("success loaded");
        });
    }
    $scope.load_http_users = function(){ 
        $http.get("data-users.json").then(function(response) {
            $scope.data_users = response.data;
            console.log(response.data);
            alert("success loaded data-users.json ");
        });
    }

  });