var num1;
var num2;
var oper;
var numbers;
var added;
arrayOfNumbers = [];


document.getElementById("divideButton").addEventListener("click", div)

document.getElementById("addButton").addEventListener("click", add)

document.getElementById("subtractButton").addEventListener("click", subs)

document.getElementById("multiplyButton").addEventListener("click", mult)

document.getElementById("squareRoot").addEventListener("click",sqrRoot)

document.getElementById("power").addEventListener("click", pow)


    function mult(){
            numbers = prompt("how many numbers do you want to multiply: ");

            for (let i = 0; i < parseInt(numbers); i++){
                arrayOfNumbers[i] = prompt("number " + (i + 1));
            }

            console.log(multiply());
        }
    
    
    function add(){
            numbers = prompt("how many numbers do you want to add: ");

            for (let i = 0; i < parseInt(numbers); i++){
                arrayOfNumbers[i] = prompt("number " + (i + 1));

            }
            console.log(sum());
        }

    num1 = Number(num1);
    num2 = Number(num2);


    function div(){
        num1 = prompt("enter the first number: ");
        num2 = prompt("enter the second number: ");
        numbers = [];
            if (num2 == 0){
                console.log("denominator must be diffrent from zero");
            }else{
                console.log(num1 / num2);
            }
        }
       

    function subs(){
        num1 = prompt("enter the first number: ");
        num2 = prompt("enter the second number: ");
        numbers = [];
        console.log(num1 - num2);
    }



    function sqrRoot(){
        num1 = prompt("enter the number: ");
        console.log("the sqaure root of " + num1 + " is " + Math.sqrt(num1));
    }

    function pow(){
        num1 = prompt("enter the number: ");
        num2 = prompt("power of: ")
        console.log("the solution is " + Math.pow(num1,num2));
    }








function multiply(){
    multiplied = 1;
    for(i=0; i < arrayOfNumbers.length;i++){
        multiplied = multiplied  * Number(arrayOfNumbers[i])

    }
    return multiplied;
}

function sum(){
    added = 0;
    for(i=0; i < arrayOfNumbers.length;i++){
        added = added + Number(arrayOfNumbers[i]);

    }
    return added;
}


