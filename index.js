// Define returnFirstTwoDrivers
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
  };
  
  // Define returnLastTwoDrivers
  const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
  };
  
  // Define selectingDrivers array containing the two functions
  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
  
  // Define createFareMultiplier
  const createFareMultiplier = function(multiplier) {
    return function(fare) {
      return fare * multiplier;
    };
  };
  
  // Define fareDoubler
  const fareDoubler = createFareMultiplier(2);
  
  // Define fareTripler
  const fareTripler = createFareMultiplier(3);
  
  // Define selectDifferentDrivers
  const selectDifferentDrivers = function(drivers, fn) {
    return fn(drivers);
  };
  
  // Example usage:
  const driversArray = ['Driver1', 'Driver2', 'Driver3', 'Driver4', 'Driver5'];
  
  console.log(returnFirstTwoDrivers(driversArray)); // ['Driver1', 'Driver2']
  console.log(returnLastTwoDrivers(driversArray)); // ['Driver4', 'Driver5']
  
  console.log(fareDoubler(10)); // 20
  console.log(fareTripler(10)); // 30
  
  console.log(selectDifferentDrivers(driversArray, returnFirstTwoDrivers)); // ['Driver1', 'Driver2']
  console.log(selectDifferentDrivers(driversArray, returnLastTwoDrivers)); // ['Driver4', 'Driver5']
  