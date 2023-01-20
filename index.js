// Code your solution in this file!

function distanceFromHqInFeet(someValue) {
  // call the distanceFromHqInBlocks function from inside the distanceFromHqInFeet function,
  // passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
  const blocks = distanceFromHqInBlocks(someValue);

  // the return value of distanceFromHqInBlocks can then be used to calculate feet

  return blocks * 264;
}

function distanceFromHqInBlocks(someValue) {
  return Math.abs(someValue - 42) ;
}

function distanceTravelledInFeet(start, destination) {
  //returns the number of feet traveled
  return Math.abs((destination - start) * 264)
}

function calculatesFarePrice(start, destination) {
  //returns the fare for the customer
  const distance = distanceTravelledInFeet(start, destination);
  let cost = 0;
  if (distance > 400 && distance < 2000) {
    cost = (distance - 400) * .02
  }
  else if (distance > 2000 && distance < 2500){
    cost = 25
  } else if(distance > 2500){
    cost = 'cannot travel that far';
  }
  return cost
}
