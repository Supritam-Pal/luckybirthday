const dateOfBirth =document.querySelector("#date-of-birth")
const luckyNumber =document.querySelector("#lucky-number")
const checkButton =document.querySelector("#check")
const outputBox = document.querySelector("#output")
checkButton.addEventListener('click',checkLucky)

function checkLucky(){
    const date = dateOfBirth.value
    const add = calculateSum(date)
    if(date && luckyNumber.value){
    compareValues(add , luckyNumber.value)
    }else{
        showMessage("Enter lucky number and dob 😀")
        outputBox.style.color="aqua"
    } 
}
function calculateSum(date){
    date = date.replaceAll("-","")
    let sum = 0;
    for(let i=0; i<date.length; i++){
        sum += Number(date.charAt(i))
    }
    return sum;
}
function compareValues(sumOfDob , luckyNo){
    if(sumOfDob%luckyNo == 0){
    showMessage("Your birthday is lucky 😘");
    outputBox.style.color="blue"
    }else{
        showMessage("Try another lucky number 😏");
        outputBox.style.color='red'
    }
}
function showMessage(msg){
    outputBox.style.fontSize = '30px';
 outputBox.innerHTML = msg
}



