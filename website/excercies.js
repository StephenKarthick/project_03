// Factorial

var input = prompt("Enter a number: ");
var result = input;
for(var i = 1; i < input; i++)
{
    result = result + i;
}
document.write(result);






// Armstrong Number:

let sum = 0;
const number =  prompt("Enter a number:");
let temp = number;
while (temp > 0) {
    let remainder = temp % 10;
    sum += remainder * remainder * remainder;
    temp = parseInt(temp / 10);
}

if (sum == number) {
    alert(` is an Armstrong number `);
}

else{
    alert(` is not Armstrong number`);
}



// Array reduce:

const numbers = [200, 75, 50];
        document.getElementById("demo").innerHTML = numbers.reduce(myFunc);

        function myFunc(total, num){
            return total-num;
        }
   


// Array filter

 const ages = [10, 15, 20, 25, 18, 30];
document.getElementById("demo").innerHTML = ages.filter(checkAdult);

function checkAdult(age){
    return age < 18;
}



// Array.isArray


const fruits = ["banana", "orange", "graps", "apple"];
let result = Array.isArray(fruits);
document.getElementById("demo").innerHTML =  result;


//Array find

const ages = [10, 15, 20, 25, 18, 30];
      document.getElementById("demo").innerHTML = ages.find(checkage);

      function checkage(age){

        return age > 18
      }



      // Array join()

      const fruits = ["apple", "orange", "grapes", "mango" ];
      let result = fruits.join(" and ");
      document.getElementById("demo").innerHTML = result;
   