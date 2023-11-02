const input = document.querySelector("#data-con");

let res = 0;
let inputdata = "";
let typeddata = 0;
let operator = "";

// inputdata = 123
// +-/*% if res == 0 --> res = inputdata, res = 123, inputdata=0
// inputdata = 54
// equals --> func -> res + inputdata, input.value
// +-/*% if res = 0 , inputdata -> res + inputdata
// +-/*% if res = 4 +  inputdata
// +-/*% if res = 4 , inputdata, res=0

// inputdat 2 , res = 0
// +-/*% = + ---> res = inputdata , inputdata = 0
// inputdata = 3 ,
// equals ---> res +-/*% inputdata

// inputdata = 2 , res = 5 --- res = 0
// +-/*% = + ---> res = inputdata , inputdata = 0
// inputdata = 3 ,
// equals ---> res +-/*% inputdata

// res = 5
// +-/*% = +  --- inputdata = 2
// equals ----> res + inputdata

// res = 0 , inputdata = 6
// + ---> if res == 0  ? res = inputdata , inputdata =""
// inputdata = 4 --> 6+4 = 10 , 4 , res = 6
// * , if res == 0 ? ---> res=6 , inputdata = ""
// inputdata = 8 , equals ----> res=6, inputdata=8 , oprator=*
// 48 ---> 80

//  6 + res , inputdata ->>> res + inputdata
//  6 + waittttt - > inoutdata res = 6,
//  inputdata =4 equals ---> 10

input.addEventListener("input", (e) => {
  typeddata = e.target.value;
});

let arryOfButtons = document.querySelectorAll(".grid-item");
console.log(arryOfButtons);

arryOfButtons.forEach((eachElement) => {
  eachElement.addEventListener("click", (e) => {
    // console.log(eachElement.classList[1])
    console.log(res,inputdata,operator)
    if (eachElement.classList[1] == "equals") {
      calculate(res, parseInt(inputdata), operator);
      inputdata = "";
      operator = "";
    } else {
      figureOutClick(eachElement.classList[1]);
    }

    console.log(res,inputdata,operator)
  });
});

const naam = (a, b) => {
  return a + b;
}

function afterOperatorClicked() {
  if (res != 0 && inputdata != "") {
    calculate(res, parseInt(inputdata), operator);
    
  } else if (res == 0) {
    res = parseInt(inputdata);
  }
  inputdata = "";

}
function makeResZero() {
  if (operator == "" && res != 0) {
    res = 0;
  }
}

// res = 4 , inputdata = "" operator = +
function figureOutClick(value) {
  switch (value) {
    case "one":
      makeResZero();
      inputdata = inputdata + "1";
      break;
    case "two":
      makeResZero();
      inputdata = inputdata + "2";
      break;
    case "three":
      makeResZero();
      inputdata = inputdata + "3";
      break;
    case "four":
      makeResZero();
      inputdata = inputdata + "4";
      break;
    case "five":
      makeResZero();
      inputdata = inputdata + "5";
      break;
    case "six":
      makeResZero();
      inputdata = inputdata + "6";
      break;
    case "seven":
      makeResZero();
      inputdata = inputdata + "7";
      break;
    case "eight":
      makeResZero();
      inputdata = inputdata + "8";
      break;
    case "nine":
      makeResZero();
      inputdata = inputdata + "9";
      break;
    case "zero":
      makeResZero();
      inputdata = inputdata + "0";
      break;
    case "modules":
      operator = "%";
      afterOperatorClicked();
      break;
    case "plus":
      operator = "+";
      afterOperatorClicked();
      break;
    case "minus":
      operator = "-";
      afterOperatorClicked();
      break;
    case "multiply":
      operator = "*";
      afterOperatorClicked();
      break;
    case "divide":
      operator = "/";
      afterOperatorClicked();
      break;
    case "null":
      inputdata = "";
      res = 0;
      break;
    default:
  }

  input.value = parseInt(inputdata);
}

function calculate(a, b, operator) {
  switch (operator) {
    case "+":
      console.log(a + b);
      res = a + b;
      break;
    case "-":
      console.log(a - b);
      res = a - b;
      break;
    case "/":
      console.log(a / b);
      res = a / b;
      break;
    case "*":
      console.log(a * b);
      res = a * b;
      break;
    case "%":
      console.log(a % b);
      res = a % b;
      break;
    default:
      console.log("wrong operator");
  }
  input.value = res;
}


