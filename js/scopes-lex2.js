var adder = function (total) {

  // the following function is returned 
  // and assigned to adder
  var inner = function (summand) {
    total += summand;
    console.log(total);
  }
  
  return inner;
  
}(0); // <- we call the annonymous function 
      //    and assign the returned function to adder

adder(2); // -> 2
adder(3); // -> 5

// inner functions contain the scope of parent functions even if the parent function has returned.