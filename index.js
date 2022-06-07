// Code your solution in this file!

let hQ = 42;
function distanceFromHqInBlocks(pickUp){
  if (pickUp > hQ){
    return pickUp - hQ
  } else {
    return hQ - pickUp;
  }
  
}
console.log(distanceFromHqInBlocks(50));


function distanceFromHqInFeet (pickUp){
  let feet = distanceFromHqInBlocks(pickUp);
  return feet * 264;
}
console.log(distanceFromHqInFeet(50));


function distanceTravelledInFeet (start, destination){
  if (destination > start){
    let feet = destination - start;
    return feet * 264
  } else {
    return (start - destination)*264
  }
}

function calculatesFarePrice (start, destination){
  // let feet = (destination - start) * 264
  let feet = distanceTravelledInFeet(start, destination);
  if (feet <= 400){
    return feet * 0;
  } else if (feet > 400 && feet <= 2000){
    return 0.02 * (feet - 400)
  } else if (feet > 2000 && feet <= 2500){
    return 25;
  } else {
    return "cannot travel that far"
  }
}