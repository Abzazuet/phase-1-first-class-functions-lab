const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = arr => [...arr].slice(0,2);

const returnLastTwoDrivers = arr => [...arr].slice(arr.length - 2, arr.length);

const selectingDrivers = (function(){
    return[
         returnFirstTwoDrivers, returnLastTwoDrivers

    ];
})();
//Logs related to returning first two drivers
/*
console.log(returnFirstTwoDrivers(drivers));
console.log(selectingDrivers[0]);
console.log(selectingDrivers[0](drivers));
//Logs related to returning last two drivers
console.log(returnLastTwoDrivers(drivers));
console.log(selectingDrivers[1]);
console.log(selectingDrivers[1](drivers));
*/
const createFareMultiplier = fare => (function(num){
    return fare * num;
});
const fareDoubler = fare => createFareMultiplier(fare)(2);
const fareTripler = fare => createFareMultiplier(fare)(3);
const selectDifferentDrivers = (arr, driversFunction) => driversFunction(arr);

//Logs related to fare multiplier
/*
console.log(createFareMultiplier(3)(5));
console.log(fareDoubler(4));
console.log(fareTripler(4));
console.log(selectDifferentDrivers(drivers, returnLastTwoDrivers));
*/

