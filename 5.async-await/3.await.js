async function execute() {
    const result = await promiseFunction(1) 
    const result2 = await promiseFunction(result); 
        // .then((result) => promiseFunction(result))
        // .then(finalresult => { 
        //     console.log('inside promise',finalresult);
        //     return finalresult;
        // });

    console.log("result variable = ",result2);

    return result;

}

function promiseFunction(input) {
    const result = input + 1;
    return Promise.resolve(result);
}


console.log(execute());