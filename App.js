var getOrder = prompt("Do you want to buy a bouquet of tulips(yes/no)?")
console.log(getOrder)
if  (getOrder == "yes"){
    var customerName = prompt ("Kindly Could you give us your name?")
var type = prompt (" which type you want to buy (Darwin/Triumph/Double)?");
switch (type) {
  case 'Darwin':
    console.log('Darwin   is $3')
    document.write ("<h4>" + 'Darwin Price is $3   ' + "</h4>")
    break;
  case 'Triumph':
   console.log('Triumph is $2')
   document.write ("<h4>" +'Triumph Price is $2    '+ "</h4>")
    break;
  case 'Double':
    console.log('Double is $5')
    document.write ("<h4>" +'Double Price is $5   '+ "</h4>")
    break;
  default:
    console.log(`please tell us what is the type you want.`);
}

  document.writeln
  document.write ("<h4>" +"customer Name is  "+ customerName+ "</h4>")
}
else {
  alert(" I hope see you again here!")
}

