const promise = new Promise((resolve,reject)=>{
    let fileLoaded = true;
    if(fileLoaded){
        resolve("File Loaded");
    }
    else{
        reject("File not LOADED");
    }
})
promise.then(value=>console.log(value)).catch(error=>console.log(error));







