// Creating Factory
/***
 * Code frome  
 * REF  https://www.tutlane.com/tutorial/angularjs/angularjs-factory-service-with-example
 */
app.factory("myFactory", function () {

  var displayFact;
  var counter2 = 0 ;
  displayFact = " Hi Guest, Welcome to ";
  var addMSG = function (msg) {
    alert("factory add msg : " + msg );
    displayFact = "" + msg;
  };

  //======================================================
  // factory can not use "this" keyword
  //======================================================
  return {
    getCounter : function(){
        return counter2 ; 
    },
    counterAdd1 : function(){
        counter2 += 1 ;
    },
    getMyMsg : function(){
        return  displayFact ;
    },
    setMSG: function (msg) {
      addMSG(msg);
    },
    getMSG: function () {
      return displayFact;
    },
  };
});
