var text = 'Wake up me';

var outer = function () {
  var inner = function () {
    var scream = '!!!';
    console.log(text + ', ' + reason + scream);
  };
  
  var reason = "I'm an attending JavaScript Session";
  var scream = '!';
  
  console.log(text + scream);
  inner();
};

outer();

// The scope of an inner function contains the scope of a parent function.
