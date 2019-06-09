//Convert the execute function to an async function
//Split up the divide and sum result and log

function execute() {
    const result = divide(4,1)
        .then(result => sum(result,0))
        .catch((error)=>console.log("catched = ",error));
    console.log(result);
}

function divide(firstNumber, secondNumber) {
    return new Promise((resolve,reject) =>{
        if(secondNumber !== 0){
            const result = firstNumber / secondNumber;
            resolve(result);
        }
        else{
            reject("Divided by zero");
        }
        
    });
}

function sum(firstNumber, secondNumber) {
    return new Promise((resolve,reject) =>{
        if(secondNumber !== 0 && firstNumber !==0){
            const result = firstNumber + secondNumber;
            resolve(result);
        }
        else{
            reject("Does not need to sum with zero");
        }
        
    });
}

execute();
