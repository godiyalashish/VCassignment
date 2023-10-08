const container = document.getElementsByClassName('container')[0];
let firstop='';
let secondop='';
let operand='';
let calculateRes = false;
let isSecondOpUpdated = false;
let isFirstOpUpdated = false;
let newScrollPosition;
const result = document.getElementById('result');
const resultContainer = document.getElementsByClassName('result')[0];

container.addEventListener('click', (e)=>{
    
    input = e.target.getAttribute('data-value')
    if(input === 'AC') clearAll();
    else if(input === '+' || input === '-' || input === '/' || input === '*') checkOp(input);
    else if(input === "result") return;
    else if(input === '=') evaluateRes();
    else storeOp(input);
});

const storeOp = (input) =>{
    if(operand){
        if(input === '.') secondop+'.'
        secondop = secondop+input;
        isSecondOpUpdated = true;
        updateRes()
    }else{
        firstop = firstop+input;
        isFirstOpUpdated = true;
        updateRes()
    }
        resultContainer.scrollLeft = result.scrollWidth;
}

const evaluateRes = () =>{
    if(!firstop) return;
    calculateRes = true;
    updateRes(eval(firstop + operand + secondop));
}

const checkOp = (input) =>{
    if(!operand){
        operand = input;
        updateRes();
    }else if(isSecondOpUpdated === false){
        operand = input;
        updateRes()
    }
    else return;
}

const clearAll = () =>{
    firstop='';
    secondop='';
    operand=undefined;
    isFirstOpUpdated = false;
    isSecondOpUpdated = false;
    calculateRes = false;
    result.innerText = '';
}

const updateRes = (res)=>{
    if(calculateRes === true){
        
        result.innerText = '';
        result.innerText=res;
        firstop = res;
        secondop='';
        operand = undefined;
        isFirstOpUpdated = true;
        isSecondOpUpdated = false;
        calculateRes = false;
        
    }else{
        if(operand && isSecondOpUpdated){
            result.innerText = firstop + operand + secondop
        }else if(operand && isFirstOpUpdated){
            result.innerText = firstop + operand;
        }else{
            result.innerText = firstop;
        }
    }
}
