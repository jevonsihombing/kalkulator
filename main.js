//menginisiasi calculator screen
const calculatorScreen = document.querySelector('.calculator-screen')


const numbers = document.querySelectorAll(".number")

//update screen setelah number diclicck
const updateScreen = (number) =>{
    calculatorScreen.value = number
}

//input number
const inputNumber = (number) =>{
    if (curretNumber === '0'){
        curretNumber = number
    }
    else{
        curretNumber +=number
    }
}

//perulangan number
numbers.forEach((number) => {
    number.addEventListener("click", (event)=>{
        inputNumber(event.target.value)
        updateScreen(curretNumber)
    })
})

//membuat 3 variebel
let prevNumber = "" //menginisiasi angka sebelum nya kosong
let calculationOperator = "" // menginisiasi calculasi operator nya kosong
let curretNumber = '0' //mengisiasi angka saat ini

//fungsi operator
const operators = document.querySelectorAll(".operator")

//input operator
const inputOperator = (operator) =>{
    if (calculationOperator === ''){
        prevNumber = curretNumber
    }
    calculationOperator = operator
    curretNumber = '0'
}

//perulangan operator
operators.forEach((operator) => {
    operator.addEventListener("click", (event)=>{
        inputOperator(event.target.value)
    })
});

//fungsi equal-sign
const equalSign = document.querySelector(".equal-sign")

//perulangan equal-sign
equalSign.addEventListener("click", ()=>{
    calculate()
    updateScreen(curretNumber)
})

//perhitungan untuk operator
const calculate = () => {
    let result = ''
    switch(calculationOperator){
        case "+":
            result = parseFloat(prevNumber) + parseFloat(curretNumber)
            break
        case "-":
            result = parseFloat(prevNumber) - parseFloat(curretNumber)
            break
        case "*":
            result = parseFloat(prevNumber) * parseFloat(curretNumber)
            break
        case "/":
            result = parseFloat(prevNumber) / parseFloat(curretNumber)
            break
        default:
            return
    }
    curretNumber = result
    calculationOperator = ''
}
//fungsi clear
const clearBtn = document.querySelector('.all-clear')

//perulangan clear
const clearAll =() =>{
    prevNumber = ''
    calculationOperator = ''
    curretNumber = '0'
}
//update screen setelah clear
clearBtn.addEventListener('click', () =>{
    clearAll()
    updateScreen(curretNumber)
})

//fungsi decimal
const decimal = document.querySelector('.decimal')

//inpu decimal
inputDecimal =(dot) =>{
    if (curretNumber.includes('.')){
        return
    }
    curretNumber += dot
} 

//perulangan decimal
decimal.addEventListener('click', (event) =>{
    inputDecimal(event.target.value)
    updateScreen(curretNumber)
})

const persent = document.querySelector('.precentage');

//perulangan persen
persent.addEventListener('click', () => {
    persen()
    updateScreen(curretNumber)
})

//perhitungan persen
const persen = () => {
    curretNumber = 1/100 * curretNumber;
}
console.log(1/100 * 1000);