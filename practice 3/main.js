// var markHeight = 1.8;
// var markMass = 80;
// var markBmi;
// markBmi = markMass / (markHeight * markHeight);
// console.log (markBmi);
// var johnHeight = 1.8;
// var johnMass = 80;
// var johnBmi;
// johnBmi = johnMass / (johnHeight * johnHeight);
// console.log (johnBmi);
// var maryHeight = 1.6;
// var maryMass = 50;
// var maryBmi;
// maryBmi = maryMass / (maryHeight * maryHeight);
// console.log (maryBmi); 
// comparingbmi = markBmi > johnBmi ;
// console.log ('is mark\'s bmi greater than john\'s? ' + comparingbmi);
// var firstName = 'john';
// var civilStatus = 'divorced';
// if (civilStatus == 'single') {
//     console.log('john is single');
// }
// else if(civilStatus == 'divorced'){
//     console.log('john is divorced');
// }
// else {
//     console.log('john is married');
// }
// if ((johnBmi > markBmi && johnBmi> maryBmi) || (johnBmi == markBmi && johnBmi> maryBmi) || (johnBmi > markBmi && johnBmi== maryBmi)) {
//     console.log('John\'s BMI is greater');
// }
// else if ((markBmi > johnBmi && markBmi> maryBmi) || (markBmi == johnBmi && markBmi> maryBmi) || (markBmi > maryBmi && markBmi== maryBmi)){
//     console.log('Mark\'s BMI is greater');
// }
// else if ((maryBmi > johnBmi && maryBmi> markBmi) || (maryBmi == johnBmi && maryBmi> markBmi) || (maryBmi > johnBmi && maryBmi== markBmi)){
//     console.log('Mary\'s BMI is greater');
// }
// else {
//     console.log('All the BMIs are equal');
// }

// if (a > 18){
//    console.log('you can have beer'); 
// } else {
//     console.log('you should have coconut water');
// }

// var firstName = 'Anjali' ; 
// var job = 'designer';
// switch (job) {
//     case 'teacher': 
//         console.log(firstName + ' teaches kids how to code.');
//         break; 
//     case 'driver':
//         console.log(firstName + ' drives an uber in Lisbon.' );
//         break;
//     case 'designer':
//         console.log(firstName + ' designs beautiful websites.' );
//         break;
//     default:
//         console.log(firstName + ' does something else.' );
// }
// var height = 1.6;
// if (height === '1.6') {
//     console.log('the operator works');
// }
// else {
//     console.log('the operator does not works');
// }
// var johnTeam = (89 + 120 + 10300) / 3 ;
// console.log(johnTeam) ;
// var mikeTeam = (116 + 94 + 123) / 3 ;
// console.log(mikeTeam) ;
// if (johnTeam > mikeTeam) {
//     console.log('JOHN');
// }
// else if (johnTeam === mikeTeam) {
//     console.log('DRAW');
// }
// else {
//     console.log('MIKE');
// }
// function calculateSpeed(speed) {
//     return speed = speed + 5 ;
// }
// var checkSpeed = calculateSpeed (10);
// console.log(checkSpeed);

// function calAge (birthYear) {
//     var age = 2019 - birthYear ;
//     return age;
// }
// calAge (2000);

// console.log(calRetAge (1995));

// function calRetAge(year) {
//    var currentAge = calAge(year);
//    var retAge = 65 - currentAge;
//     return retAge ;
// }

// var calRetAge1 = function (year) {
//     var currentAge = calAge(year);
//     var retAge = 65 - currentAge;
//     return retAge ; 
// }
// console.log(calRetAge1(2000)) ; 

// var names = ["Anjali", "Aditya"] ;
// console.log(names[2]);
// var n_len = names.length;
// console.log(n_len);

// names.push('Ami');
// console.log(names);
// console.log(names[2]);
// names.unshift('Ashish');
// console.log(names);
// names.pop();
// console.log(names);
// console.log(names.indexOf('Ashish'));



var bills = [124, 48, 268];

function calTip (bills) {
    var Tip = 0.2 * bills ;
    return Tip ;
}
var tip = [console.log(calTip(124)),console.log(calTip(48)),console.log(calTip(268)) ] ;


// kelvin
const kelvin = 293 ; 
// celcius
const celcius = kelvin - 273;
// fahrenheit
let fahrenheit = celcius * (9 / 5) + 32;
// this is to round the fahrenheit
fahrenheit = Math.floor(fahrenheit);
console.log(`The temprature is ${fahrenheit} degrees fahrenheit`);

