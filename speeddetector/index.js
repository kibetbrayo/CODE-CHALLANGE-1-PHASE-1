//calculating the speed of a car
function checkspeed() {
    const speed = parseFloat(prompt("Enter the car speed:"));
  
    if (speed < 70) {
      return "OK";
    } else {
      const demeritpoints = Math.floor((speed - 70) / 5);
  
      if (demeritpoints > 12) {
        return "License suspended";
      } else {
        return "Points: " + demeritpoints;
      }
    }
  }
  
  console.log(checkspeed()); //call function
  