"use strict";
const findBestEmployee = function(employees) {
  employees = Object.entries(employees);
  let maxValue = 0;
  let name;
  for (const arr of employees) {
    if (maxValue < arr[1]) {
      maxValue = arr[1];
      name = arr[0];
    }
  }
  return name;
};

console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99
  })
); 

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4
  })
); 

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38
  })
); 
