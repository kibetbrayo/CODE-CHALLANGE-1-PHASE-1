//calculating the students grade
function generategrade(){
let marks =parseFloat(prompt("enter your grade:"))//declaring the variable
    if (marks < 0 || marks > 100)
    return 'invalid';{
        if (marks >79 ){
            return 'A';
        
      }else if (marks >= 60 && marks <=79 ){
        return 'B';
      }else if (marks >= 50 && marks <= 59){
        return 'C';
      }else if (marks >= 40 && marks <=49){
        return 'D';
      }else{
        return 'E'
      }
    }
  }

let grade = generategrade();//call function to compute the grade
console.log("grade");