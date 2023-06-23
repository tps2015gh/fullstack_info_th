## AngularJS ( client side )
###Reference : 
- https://angularjs.org/
  - แบบ Basic [click](#โครงสร้างไฟล์-1)
  - แบบ มี Controller (html + todo.js หรือ app.js ไฟล์เดียว) [click](#โครงสร้างไฟล์-2)
  - แบบ มี Components (html + app.js + components.js )
  - > ใน components.js มีการใช้ directive [click](#โครงสร้างไฟล์-3)
- AngularJS Tutorial from W3School
  - https://www.w3schools.com/angular/
- Angualar JS คืออะไร
  - https://blog.devahoy.com/blog/2015/05/getting-started-angular-js
- AngularJS Tutorial from JavaTPoint  
  - https://www.javatpoint.com/angularjs-tutorial

###โค้ดเบื้องต้น 
####โครงสร้างไฟล์ 1
> เป็นแบบรวมไฟล์เดียว
```
<!doctype html>
<html ng-app>
  <head>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.8.2/angular.min.js"></script>
  </head>
  <body>
    <div>
      <label>Name:</label>
      <input type="text" ng-model="yourName" placeholder="Enter a name here">
      <hr>
      <h1>Hello {{yourName}}!</h1>
    </div>
  </body>
</html>
```
### โครงสร้างไฟล์ 2 
  > angular.module('todoApp', [])
  >.controller('TodoListController', function() {
    var todoList = this; // อาจใช้ self หรือ อื่นๆ
    todoList.todos = [ ... 
    todoList.addTodo = function() {

####โครงสร้างไฟล์ 3

 > angular.module('app', ['components'])
.controller('BeerCounter', function(\$scope, \$locale) {
  \$scope.beers = [0, 1, 2, 3, 4, 5, 6];
  if (\$locale.id == 'en-us') {

> angular.module('components', [])
> .directive('tabs', function() {
    return {
       restrict: 'E',
       scope: {},
       controller: function($scope, $element) { ...
         \$scope.select = function(pane) { ...
       this.addPane = function(pane) { ...
       template:
        \'<div class=\"tabbable">' + 
      replace: true

> .directive('pane', function() {
    return {
      require: '^tabs',
      restrict: 'E',
      transclude: true,
      ....
      link: function(scope, element, attrs, tabsController) {
        tabsController.addPane(scope);
      },