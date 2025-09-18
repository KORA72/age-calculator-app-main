const button=document.getElementById('completed-task');
button.addEventListener("click",discharge);
// CREATING DATE 

const today = new Date();
let currentYear = today.getFullYear();
 let currentMonth = today.getMonth();
 let currentDay = today.getDate();

function discharge(event){
let inputYear=document.getElementById('inputYear').value;
  let inputMonth=document.getElementById('inputMonth').value;
  let inputDay=document.getElementById('inputDay').value;
  let outputYears=document.querySelector('.outputYears');
  let outputMonth=document.querySelector('.outputMonth');
  let outputDay=document.querySelector('.outputDay');
  let singularYear =document.querySelector('.singular__year');
  let singularMonth =document.querySelector('.singular__month');
  let singularDay =document.querySelector('.singular__day');

//error output
  let result =document.querySelector('.result');
  let errorDay =document.querySelector('.error__Day');
  let errorMonth =document.querySelector('.error__Month');
  let errorYear =document.querySelector('.error__Year');

  let classDay =document.querySelector('.day1');
  let classMonth =document.querySelector('.month1');
  let classYear =document.querySelector('.year1');

  let nameYear = document.querySelector('.year');
  let nameMonth = document.querySelector('.month');
  let nameDay = document.querySelector('.day');

  let validMonth =document.querySelector('.validMonth');
  let validDay =document.querySelector('.validDay');
  let validYear =document.querySelector('.validYear');

  let inputError = document.querySelectorAll('.input-error');


  

  //MAIN CALCULATION

  // YEARS ************
  let yearDifference = currentYear - inputYear;
  console.log('year difference is ' + yearDifference);
  outputYears.textContent = yearDifference;
 

  //MONTHS *************
  let monthDifference = currentMonth- inputMonth;
  console.log('month difference is '+ monthDifference);
  
  // if monthDifference is negative
  if(monthDifference < 0){
    monthDifference += 12;
    yearDifference -=1;
    console.log('new monthdifference : ' + monthDifference);
  }
 
  


  //DAYS***********
  let dayDifference = currentDay - inputDay;
  console.log('daydifference : ' + dayDifference);

  //if dayDifference is negative
   if(dayDifference < 0){
    dayDifference +=30;
    monthDifference -=1;
    if(monthDifference < 0){
      monthDifference +=12;
      yearDifference -=1;
    }
   } 
//   // FINAL RESULT OUTPUT 
// outputMonth.textContent = monthDifference;
// outputYears.textContent = yearDifference;
// outputDay.textContent = dayDifference;




 // if dayDifference = 1
if(dayDifference === 1){
  singularDay.textContent ="day";
}else{
  singularDay.textContent ="days";
}

// if monthDifference = 1
if(monthDifference === 1){
  singularMonth.textContent ="month";
}else{
  singularMonth.textContent ="months";
}

 // if yearDifference = 1
 if(yearDifference == 1){
  singularYear.textContent ="year";
}else{
  singularYear.textContent ="years";
}
 

//if input error contains warning

if(inputYear ==""){
  errorYear .textContent= "This field is required"; 
  classYear.style.borderColor='hsl(0, 100%, 67%)';
  nameYear.style.color='hsl(0, 100%, 67%)';
}else if(inputYear !==""){
  errorYear.textContent= ""; 
  classYear.style.borderColor='hsl(0, 1%, 44%)';
  nameYear.style.color='hsl(0, 1%, 44%)';
}


if(inputMonth ==""){
  errorMonth .textContent= "This field is required"; 
  classMonth.style.borderColor='hsl(0, 100%, 67%)';
  nameMonth.style.color='hsl(0, 100%, 67%)';
}else if(inputMonth !==""){2
  errorMonth.textContent= ""; 
  classMonth.style.borderColor='hsl(0, 1%, 44%)';
  nameMonth.style.color ='hsl(0, 1%, 44%)';
}


if(inputDay ==""){
  errorDay.textContent= "This field is required"; 
  classDay.style.borderColor='hsl(0, 100%, 67%)';
  nameDay.style.color ='hsl(0, 100%, 67%)';
}else if(inputDay !==""){
  errorDay.textContent= ""; 
  classDay.style.borderColor='hsl(0, 1%, 44%)';
  nameDay.style.color ='hsl(0, 1%, 44%)';
}
if(inputError.innerHTML !==""){
  outputYears.textContent ="- -";
  outputMonth.textContent ="- -";
  outputDay.textContent ="- -";
  classDay.style.borderColor='hsl(0, 100%, 67%)';
  classMonth.style.borderColor='hsl(0, 100%, 67%)';
  classYear.style.borderColor='hsl(0, 100%, 67%)';
  nameDay.style.color ='hsl(0, 100%, 67%)';
  nameMonth.style.color ='hsl(0, 100%, 67%)';
  nameYear.style.color ='hsl(0, 100%, 67%)';
}

//day and month checking
if(inputDay > 29 && inputMonth ==2){
  result.innerHTML ="Must be a valid date"
  outputYears.textContent ="- -";
  outputMonth.textContent ="- -";
  outputDay.textContent ="- -";
  classDay.style.borderColor='hsl(0, 100%, 67%)';
  classMonth.style.borderColor='hsl(0, 100%, 67%)';
  classYear.style.borderColor='hsl(0, 100%, 67%)';
  nameDay.style.color ='hsl(0, 100%, 67%)';
  nameMonth.style.color ='hsl(0, 100%, 67%)';
  nameYear.style.color ='hsl(0, 100%, 67%)';
  singularDay.textContent ="days";
  singularMonth.textContent ="months";
  singularYear.textContent ="years";
}else if(inputDay > 30 && inputMonth == 4 ){//april
  result.innerHTML ="Must be a valid date";
  outputYears.textContent ="- -";
  outputMonth.textContent ="- -";
  outputDay.textContent ="- -";
  classDay.style.borderColor='hsl(0, 100%, 67%)';
  classMonth.style.borderColor='hsl(0, 100%, 67%)';
  classYear.style.borderColor='hsl(0, 100%, 67%)';
  nameDay.style.color ='hsl(0, 100%, 67%)';
  nameMonth.style.color ='hsl(0, 100%, 67%)';
  nameYear.style.color ='hsl(0, 100%, 67%)';
  singularDay.textContent ="days";
  singularMonth.textContent ="months";
  singularYear.textContent ="years";
}else if(inputDay > 30 && inputMonth == 6 ){//june
  result.innerHTML ="Must be a valid date";
  outputYears.textContent ="- -";
  outputMonth.textContent ="- -";
  outputDay.textContent ="- -";
  classDay.style.borderColor='hsl(0, 100%, 67%)';
  classMonth.style.borderColor='hsl(0, 100%, 67%)';
  classYear.style.borderColor='hsl(0, 100%, 67%)';
  nameDay.style.color ='hsl(0, 100%, 67%)';
  nameMonth.style.color ='hsl(0, 100%, 67%)';
  nameYear.style.color ='hsl(0, 100%, 67%)';
  singularDay.textContent ="days";
  singularMonth.textContent ="months";
  singularYear.textContent ="years";
}else if(inputDay > 30 && inputMonth == 9 ){//september
  result.innerHTML ="Must be a valid date";
  outputYears.textContent ="- -";
  outputMonth.textContent ="- -";
  outputDay.textContent ="- -";
  classDay.style.borderColor='hsl(0, 100%, 67%)';
  classMonth.style.borderColor='hsl(0, 100%, 67%)';
  classYear.style.borderColor='hsl(0, 100%, 67%)';
  nameDay.style.color ='hsl(0, 100%, 67%)';
  nameMonth.style.color ='hsl(0, 100%, 67%)';
  nameYear.style.color ='hsl(0, 100%, 67%)';
  singularDay.textContent ="days";
  singularMonth.textContent ="months";
  singularYear.textContent ="years";
}else if(inputDay > 30 && inputMonth == 11 ){//November
  result.innerHTML ="Must be a valid date";
  outputYears.textContent ="- -";
  outputMonth.textContent ="- -";
  outputDay.textContent ="- -";
  classDay.style.borderColor='hsl(0, 100%, 67%)';
  classMonth.style.borderColor='hsl(0, 100%, 67%)';
  classYear.style.borderColor='hsl(0, 100%, 67%)';
  nameDay.style.color ='hsl(0, 100%, 67%)';
  nameMonth.style.color ='hsl(0, 100%, 67%)';
  nameYear.style.color ='hsl(0, 100%, 67%)';
  singularDay.textContent ="days";
  singularMonth.textContent ="months";
  singularYear.textContent ="years";
}else if(inputDay > 31 || inputMonth > 12 || inputYear > 2023){
  result.innerHTML ="Must be a valid date";
  outputYears.textContent ="- -";
  outputMonth.textContent ="- -";
  outputDay.textContent ="- -";
}else if(inputYear =="" || inputMonth =="" || inputDay==""){
  outputYears.textContent ="- -";
  outputMonth.textContent ="- -";
  outputDay.textContent ="- -";
}
else{
    // FINAL RESULT OUTPUT 
    result.innerHTML ="";
outputMonth.textContent = monthDifference;
outputYears.textContent = yearDifference;
outputDay.textContent = dayDifference;
classMonth.style.borderColor='hsl(0, 1%, 44%';
nameMonth.style.color ='hsl(0, 1%, 44%)';
classYear.style.borderColor='hsl(0, 1%, 44%)';
nameYear.style.color ='hsl(0, 1%, 44%)';
classDay.style.borderColor='hsl(0, 1%, 44%)';
nameDay.style.color ='hsl(0, 1%, 44%)';
}

}



