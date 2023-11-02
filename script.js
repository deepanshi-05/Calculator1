let a=5
let b=10

let operator="+"

const input = document.querySelector(".data-con")
console.log(input)
input.addEventListener("input",(e)=>{
console.log(e.target.value)
})

switch(operator){
    case"+":
        console.log(a+b);
        break;
    case"-":
        console.log(a-b);
        break;
    case"/":
        console.log(a/b);
        break;
    case"*":
        console.log(a*b);
        break;
    case"%":
        console.log(a%b);
        break;
    default:
        console.log("wrong operator")
}
