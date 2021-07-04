
var getOrder = prompt("Do you want to buy a bouquet of tulips(yes/no)?")
// console.log(getOrder)
if  (getOrder == "yes"){
  // var type, times = orderInfo();
  var customerName = prompt ("Kindly Could you give us your name?")

var type = prompt (" which type you want to buy (Darwin/Triumph/Double)?");

while(type != "Darwin " && type != "Triumph " && type != "Double "){
  favAnime = prompt(" which type you want to buy (Darwin/Triumph/Double)?")
}

var times= prompt("how many time you wish to see your Tuleep on my page ")
document.write ("<h4>" +"customer Name is  "+ customerName+ "</h4>")
  myFunction(type,times);

switch (type) {
  case 'Darwin ':
    console.log('Darwin   is $3')
    document.write ("<h4>" + 'Darwin Price is $3   ' + "</h4>")
     document.writeln
    break;
  case 'Triumph ':
   console.log('Triumph is $2')
   document.write ("<h4>" +'Triumph Price is $2    '+ "</h4>")
    document.writeln
  
    break;
  case 'Double ':
    console.log('Double is $5')
    document.write ("<h4>" +'Double Price is $5   '+ "</h4>")
     document.writeln
  
    break;
  default:
    console.log(`please tell us what is the type you want.`);
} // end switch

} // end if true
else {
  alert(" I hope see you again here!")
} // end if false 


//////////////////////////////////////

function myFunction(type,times){
// type # 1
   if( type == "Darwin " ) {
for(var i = 0 ; i < times; i++) {
document.write("<div>" + "<h3>" + type +"</h3>" + "<img src='https://www.whiteflowerfarm.com/mas_assets/uploaded/Image/242412.jpg' alt='Darwin Hybrid Tulips' >" + "</div>")
} // end For loop 
} //end of type 1

// Type #2
 else if(type == "Triumph ") {
   for(var i = 0 ; i < times; i++) {
document.write("<div>" + "<h3>" + type +"</h3>" + "<img src='https://www.whiteflowerfarm.com/mas_assets/uploaded/Image/977311.jpg' alt='Triumph Tulips'  >" + "</div>")
} // end for loop
 } // end of type 2

// Type #3
 else if(type == "Double ") {
   for(var i = 0 ; i < times; i++) {
document.write("<div>" + "<h3>" + type +"</h3>" + "<img src='https://www.whiteflowerfarm.com/mas_assets/uploaded/Image/242927.jpg' alt='Double Tulips' >" + "</div>")
} // end for loop
 } // end of type 3

} // end of function

////////////////////////////////////////////////////////////////






 




