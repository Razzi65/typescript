// //1. Write a ts program to find maximum between two numbers.

// var num1:string | null = prompt("Write number 1");
// var num2:string | null = prompt("Write number 2");

// var num3:number = Number(num1);
// var num4:number = Number(num2);

// if (num3 > num4) {
//     console.log("First Number is Greater")
// }
// else {
//     console.log("Second Number is Greater")
// }




//2. Write a ts program to find maximum between three numbers


// var num5: string | null = prompt("Write First Number");
// var num6: string | null = prompt("Write second number");
// var num7: string | null = prompt("write third number");

// var num8:number = Number(num5);
// var num9:number = Number(num6);
// var num10:number = Number(num7);

// if (num8 > num9 && num8 > num10) {
//     console.log ("First Number is Greater")
// }
// else if (num9 > num8 && num9 > num10) {
//     console.log ("Second Number is Greater")
// }
// else if (num10 > num8 && num10 > num9) {
//     console.log ("Third Number is greater")
// }



//3. Write a ts program to check whether a number is negative, positive or zero.

// var num11: string | null = prompt("write first number");
// var num12: number = Number(num11);
// if (num12 < 0) {
//     console.log ("Number is Negative")
// }
// else if (num12 > 0) {
//     console.log("Number is Positive")
// }
// else {
//     console.log ("Number is Zero")
// }



// 4. Write a ts program to check whether a number is divisible by 5 and 11 or not.

// var num13: string | null = prompt("write a number");
// var num14: number = Number(num13);
// if (num14%5==0) {
//     console.log("Number is divided by 5")
// }
// else if (num14%11==0) {
//     console.log ("Number is divided by 11")
// }
// else {
//     console.log ("Number can not be divided to 5 or 11")
// }


//Write a ts program to check whether a character is uppercase or lowercase alphabet

// var ab:any = prompt("write a letter")


// if (ab==ab.toUpperCase()) {
//     console.log("It's Capital")
// }
// else {
// console.log("It's lower case")
// }


// //11. Write a ts program to input week number and print week day.
// var weekday: string|null = prompt("Write Week Number");

// if (weekday=="1") {
//     console.log("Saturday")
// }
// else if (weekday=="2") {
//     console.log("Sunday")
// }
// else if (weekday=="3") {
//     console.log("Monday")
// }
// else if (weekday=="4") {
//     console.log("Tueday")
// }
// else if (weekday=="5") {
//     console.log("Wednesday")
// }
// else if (weekday=="6") {
//     console.log("Thursday")
// }
// else if (weekday=="7") {
//     console.log("Friday")
// }
// else {
//     console.log ("Write a Number from1 to 7")
// }

//12. Write a ts program to input month number and print number of days in that month.

// var monthnmbr:any= prompt("Write Month Number");

// if (monthnmbr=="1" || monthnmbr=="3" || monthnmbr=="5" || monthnmbr=="7" || monthnmbr=="8" || monthnmbr=="10" || monthnmbr=="12" ) {
//     console.log("Month Number", +monthnmbr, "has 31 Days")
// }
// else if (monthnmbr=="2") {
//     console.log("Month Number 2 has 28 days")
// }
// else if(monthnmbr >"12") {
//     console.log("Enter a valid number")
// }
// else  {
//     console.log("Month has 30 days")
// }


//13. Write a ts program to count total number of notes in given amount.

// var amount: string|null = prompt("Enter the amount")
// var amt= Number(amount);
// console.log("Notes in", +amt )

// if(amt<100) {
//     console.log ("Notes of 50 are", Math.floor(amt/50)); 
//     console.log ("Notes of 10 are", Math.floor(amt%50/10)); 
//     console.log ("Notes of 5 are", Math.floor(amt%10/5));
//     console.log ("Notes of 1 are", Math.floor(amt%10-5));

// }

// else if(amt>=100 && amt < 500) {
//     console.log ("Notes of 100 are", Math.floor(amt/100));
//     console.log ("Notes of 10 are", Math.floor(amt%100/10)); 
//     console.log ("Notes of 5 are", Math.floor(amt%10/5));
//     console.log ("Notes of 1 are", Math.floor(amt%10-5));

// }
// else if(amt >=500 && amt <1000) {
//     console.log ("Notes of 500 are", Math.floor(amt/500));
//     console.log ("Notes of 100 are", Math.floor(amt%500/100));
//     console.log ("Notes of 10 are", Math.floor(amt%100/10)); 
//     console.log ("Notes of 5 are", Math.floor(amt%10/5));
//     console.log ("Notes of 1 are", Math.floor(amt%10-5));

// }
// else if(amt >=1000) {
//     console.log ("Notes of 1000 are", Math.floor(amt/1000));
//     console.log ("Notes of 500 are", Math.floor(amt%1000/500));
//     console.log ("Notes of 100 are", Math.floor(amt%500/100));
//     console.log ("Notes of 10 are", Math.floor(amt%100/10)); 
//     console.log ("Notes of 5 are", Math.floor(amt%10/5));
//     console.log ("Notes of 1 are", Math.floor(amt%10-5));

// }


//14. Write a ts program to input angles of a triangle and check whether triangle is valid or not.

// var angle1:string|null= prompt("Enter First Angle");
// var angle2:string|null= prompt("Enter Second Angle");
// var angle3:string|null= prompt("Enter Third Angle");

// var angle11:number= Number(angle1);
// var angle22:number= Number(angle2);
// var angle33:number= Number(angle3);


// if (angle11+angle22+angle33==180) {
//     console.log ("It's a Triangle")
// }
// else {
//     console.log("It's not a Triangle")
// }



//15. Write a ts program to input all sides of a triangle and check whether triangle is valid or not.

// var side:string|null=prompt("Write number of sides")
// var sides:number=Number(side);
// if(sides==3){
//     console.log("It's a triangle")
// }
// else {
//     console.log("It's not a triangle")
// }



//16. Write a ts program to check whether the triangle is equilateral, isosceles or scalene triangle.

// var angle111:string|null=prompt("Write first angle");
// var angle222:string|null=prompt("Write second angle");
// var angle333:string|null=prompt("Write third angle");

// var angle1111:number= Number(angle111);
// var angle2222:number= Number(angle222);
// var angle3333:number= Number(angle333);

// if ((angle1111==angle2222 && angle1111==angle3333 && angle2222==angle3333) && (angle1111+angle2222+angle3333==180)){
//     console.log("It's Equilaterl Triangle")
// }
// else if ((angle1111==angle2222 || angle2222 == angle3333 || angle1111==angle3333) && (angle1111+angle2222+angle3333==180)) {
//     console.log("It's an Isosceles Triangle")
// }
// else if ((angle1111+angle2222+angle3333==180)) {
//     console.log("It's a scalene trisngle")
// }
// else {
//     console.log("It's not a Triangle")
// }

//17. Write a ts program to find all roots of a quadratic equation.


//18. Write a ts program to calculate profit or loss.

//  var sales: string|null=prompt("Write your sales");
//  var expenses: string|null=prompt("Write your expenses");

//  var sale1:number=Number(sales);
//  var expenses1:number=Number(expenses);

//  if (sale1>expenses1){
//      console.log("You're in profit of Rs.", +(sale1-expenses1))
//  }
//  else {
//      console.log("You're in  Loss of Rs." + (expenses1-sale1))
//  }


//19. Write a ts program to input marks of five subjects Physics, Chemistry, Biology, Mathematics and Computer. Calculate percentage and grade according to following:
// Percentage >= 90% : Grade A
// Percentage >= 80% : Grade B
// Percentage >= 70% : Grade C
// Percentage >= 60% : Grade D
// Percentage >= 40% : Grade E
// Percentage < 40% : Grade F

// var Physics:string|null=prompt("write your Physic marks");
// var Physics1:number=Number(Physics);

// var chemistry:string|null=prompt("write your chemistry marks");
// var chemistry1:number=Number(chemistry);

// var Biology:string|null=prompt("write your Biology marks");
// var Biology1:number=Number(Biology);

// var Maths:string|null=prompt("write your Mathemetics marks");
// var Maths1:number=Number(Maths);

// var Computer:string|null=prompt("write your Computer marks");
// var Computer1:number=Number(Computer);

// if (Physics1/100*100>=90 && Physics1/100*100 < 100 ) {
//     console.log("percentage in Physics is", +Physics1/100*100, "Grade is A" )
// }
// else if (Physics1/100*100>=80 && Physics1/100*100 < 90 ) {
//     console.log("percentage in Physics is", +Physics1/100*100, "Grade is B" )
// }
// else if (Physics1/100*100 >= 70 && Physics1/100*100 < 80) {
//     console.log("percentage in Physics is", +Physics1/100*100, "Grade is C" )
// }
// else if (Physics1/100*100>=60 && Physics1/100*100 < 70 ) {
//     console.log("percentage in Physics is", +Physics1/100*100, "Grade is D" )
// }
// else if (Physics1/100*100 >= 50 && Physics1/100*100 < 60) {
//     console.log("percentage in Physics is", +Physics1/100*100, "Grade is E" )
// }
// else if ( Physics1/100*100 < 40) {
//     console.log("percentage in Physics is", +Physics1/100*100, "Grade is F" )
// }
// else {
//     console.log("Write correct number")
// }


// if (chemistry1/100*100>=90 && chemistry1/100*100 < 100 ) {
//     console.log("percentage in chemistry is", +chemistry1/100*100, "Grade is A" )
// }
// else if (chemistry1/100*100>=80 && chemistry1/100*100 < 90 ) {
//     console.log("percentage in chemistry is", +chemistry1/100*100, "Grade is B" )
// }
// else if (chemistry1/100*100 >= 70 && chemistry1/100*100 < 80) {
//     console.log("percentage in chemistry is", +chemistry1/100*100, "Grade is C" )
// }
// else if (chemistry1/100*100>=60 && chemistry1/100*100 < 70 ) {
//     console.log("percentage in chemistry is", +chemistry1/100*100, "Grade is D" )
// }
// else if (chemistry1/100*100 >= 50 && chemistry1/100*100 < 60) {
//     console.log("percentage in chemistry is", +chemistry1/100*100, "Grade is E" )
// }
// else if ( chemistry1/100*100 < 40) {
//     console.log("percentage in chemistry is", +chemistry1/100*100, "Grade is F" )
// }
// else {
//     console.log("Write correct number")
// }


// if (Biology1/100*100>=90 && Biology1/100*100 < 100) {
//     console.log("percentage in Biology is", +Biology1/100*100, "Grade is A" )
// }
// else if (Biology1/100*100>=80 && Biology1/100*100 < 90 ) {
//     console.log("percentage in Biology is", +Biology1/100*100, "Grade is B" )
// }
// else if (Biology1/100*100 >= 70 && Biology1/100*100 < 80) {
//     console.log("percentage in Biology is", +Biology1/100*100, "Grade is C" )
// }
// else if (Biology1/100*100>=60 && Biology1/100*100 < 70 ) {
//     console.log("percentage in Biology is", +Biology1/100*100, "Grade is D" )
// }
// else if (Biology1/100*100 >= 50 && Biology1/100*100 < 60) {
//     console.log("percentage in Biology is", +Biology1/100*100, "Grade is E" )
// }
// else if ( Biology1/100*100 < 40) {
//     console.log("percentage in Biology is", +Biology1/100*100, "Grade is F" )
// }
// else {
//     console.log("Write correct number")
// }


// if (Maths1/100*100>=90 && Maths1/100*100 < 100) {
//     console.log("percentage in Maths1 is", +Maths1/100*100, "Grade is A" )
// }
// else if (Maths1/100*100>=80 && Maths1/100*100 < 90 ) {
//     console.log("percentage in Maths1 is", +Maths1/100*100, "Grade is B" )
// }
// else if (Maths1/100*100 >= 70 && Maths1/100*100 < 80) {
//     console.log("percentage in Maths is", +Maths1/100*100, "Grade is C" )
// }
// else if (Maths1/100*100>=60 && Maths1/100*100 < 70 ) {
//     console.log("percentage in Maths is", +Maths1/100*100, "Grade is D" )
// }
// else if (Maths1/100*100 >= 50 && Maths1/100*100 < 60) {
//     console.log("percentage in Maths is", +Maths1/100*100, "Grade is E" )
// }
// else if ( Maths1/100*100 < 40) {
//     console.log("percentage in Maths is", +Maths1/100*100, "Grade is F" )
// }
// else {
//     console.log("Write correct number")
// }


// if (Computer1/100*100>=90 && Computer1/100*100 < 100) {
//     console.log("percentage in Computer is", +Computer1/100*100, "Grade is A" )
// }
// else if (Computer1/100*100>=80 && Computer1/100*100 < 90 ) {
//     console.log("percentage in Computer is", +Computer1/100*100, "Grade is B" )
// }
// else if (Computer1/100*100 >= 70 && Computer1/100*100 < 80) {
//     console.log("percentage in Computer is", +Computer1/100*100, "Grade is C" )
// }
// else if (Computer1/100*100>=60 && Computer1/100*100 < 70 ) {
//     console.log("percentage in Computer is", +Computer1/100*100, "Grade is D" )
// }
// else if (Computer1/100*100 >= 50 && Computer1/100*100 < 60) {
//     console.log("percentage in Computer is", +Computer1/100*100, "Grade is E" )
// }
// else if ( Computer1/100*100 < 40) {
//     console.log("percentage in Computer is", +Computer1/100*100, "Grade is F" )
// }
// else {
//     console.log("Write correct number")
// }



//20. Write a ts program to input basic salary of an employee and calculate its Gross salary according to following:
// Basic Salary <= 10000 : HRA = 20%, DA = 80%
// Basic Salary <= 20000 : HRA = 25%, DA = 90%
// Basic Salary > 20000 : HRA = 30%, DA = 95%

//  var salary:string|null = prompt("Write your salary");
//  var salary1:number= Number(salary);


//  if (salary1<=10000) {
//      console.log("Your Gross Salary is " ,+ (salary1+salary1*20/100+salary1*80/100))
//  }
//  else if (salary1<=20000) {
//      console.log ("Your gross salary is ",+ (salary1+salary1*25/100+salary1*90/100))
//  }
//  else if (salary1 > 20000) {
//      console.log("Your gross salary is ",+ (salary1+salary1*30/100+salary1*95/100));
    
// }

// 21. Write a ts program to input electricity unit charges and calculate total electricity bill according to the given condition:
// For first 50 units Rs. 0.50/unit
// For next 100 units Rs. 0.75/unit
// For next 100 units Rs. 1.20/unit
// For unit above 250 Rs. 1.50/unit
// An additional surcharge of 20% is added to the bill

 var units:string|null=prompt("Write number of units");
 var units1:number=Number(units);

 var surc:number=(units1*.5)*20/100
 var surc2:number=(units1*.75)*20/100
 var surc3:number=(units1*1.2)*20/100
 var surc4:number=(units1*1.5)*20/100

 if (units1<=50) {
     console.log("Total Electricity Bill  is ",  units1*.5 +surc)
 }

 else if (units1<=150) {
     console.log("Total Electricity Bill  is ",  units1*.75 +surc2)
 }

 else if (units1<=250) {
     console.log("Total Electricity Bill  is ",  units1*1.2 +surc3)
 }

else if (units1>250) {
     console.log("Total Electricity Bill  is ",  units1*1.5 +surc4)
 }
