// Creating Factory
/***
 * Code frome  
 * REF  https://www.tutlane.com/tutorial/angularjs/angularjs-factory-service-with-example 
 * 
 * Somecode generated from microsoft AI ,modify from  factory.js 
 */
app.service("myService", function () {

  var displayFact;
  var counter2 = 0 ;
  displayFact = " Hi Guest, Welcome to ";
  var addMSG = function (msg) {
    alert("service add msg : " + msg );
    displayFact = "" + msg;
  };

  //======================================================
  // service can use "this" keyword to declare function 
  //======================================================
  this.getCounter = function(){
        return this.counter2 ; 
    };
  this.counterAdd1 = function(){
        counter2 += 1 ;
    };
  this.getMyMsg = function(){
        return  displayFact ;
    };
  this.setMSG = function (msg) {
      addMSG(msg);
    };
  this.getMSG = function () {
      return displayFact;
    };
});

