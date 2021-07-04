
 document.write("<div>" + "<h3>" + "How do you rate our website?" + "</h3>" + "<img src='https://image.shutterstock.com/image-vector/how-do-you-rate-our-260nw-1317876044.jpg' alt='Rating Site'>" + "</div>");
// input user's rate
var rate = parseInt(prompt("How do you rate our website?(please enter your rate From 5 to 1)"));
rateWebsite(rate);



function showStars(rateNum) {


for(var i = 0 ; i < rateNum; i++) {

  document.write("<div class='horizantalDiv'>" +  "<img src='https://th.bing.com/th/id/OIP.XmO2L6mU5Q1fq1tndO67HgHaHF?w=217&h=208&c=7&o=5&pid=1.7'>" + "</div>");
} // end for 
 
}// end of function



///////////////////////////////////////////////////////////////

// function to get all info from customer


function rateWebsite(rate){

// // show rating image
  // document.write("<div>" + "<h3>" + "How do you rate our website?" + "</h3>" + "<img src'https://image.shutterstock.com/image-vector/how-do-you-rate-our-260nw-1317876044.jpg'>" + "</div>");

// // input user's rate
// var rate = parseInt(prompt("How do you rate our website?(please enter your rate From 1 up to 5)"));

if (rate == 5 ){
    console.log('Excellent')
    document.write ("<h4>" + 'your rate is Excellent   ' + "</h4>")
     document.writeln
     showStars(rate);
}
else if  (rate == '4'){
    
   console.log('Good')
   document.write ("<h4>" +'Your rate is Good    '+ "</h4>")
    document.writeln
    showStars(rate);
}
   else if  (rate == '3'){  
    console.log('Average')
    document.write ("<h4>" +'Your rate is Average   '+ "</h4>")
     document.writeln
     showStars(rate);
   }
   else if  (rate == '2'){
   console.log('Poor')
   document.write ("<h4>" +'Your rate is Poor   '+ "</h4>")
    document.writeln
        showStars(rate);
   }
      else if  (rate == '1'){
    console.log('Very Poor')
    document.write ("<h4>" +'Your rate is Very Poor   '+ "</h4>")
     document.writeln
        showStars(rate);

      }
} //  add fun

  