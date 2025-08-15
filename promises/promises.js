 const promiseOne = new Promise(function(resolve,reject){
    // Do an asyn task 
    // DB calls,cryptography,network calls
    setTimeout(function(){
        console.log("Promise One Resolved");
        resolve()
        
        let error = true;
        if(error){
            reject("Error in Promise One");
        }
        else{
            reject("More Error in Promise One");
        }
    },1000)
 })

 promiseOne.then(function(){
    console.log("Promise One is done");
 })

 promiseOne.catch(function(){
    console.log("Promise One is failed");
 })

 promiseOne.finally(function(){
    console.log("Promise One is print");
 })



//  async function getUser(){
//     try{
//       const response = await fetch('    https://jsonplaceholder.typicode.com/users');
//         const data = await response.json();
//         console.log(data);  
//     }
//     catch(error){
//         console.error("Error fetching user data:", error); 
//     }

//  }

//  getUser()


 fetch("  https://jsonplaceholder.typicode.com/users")
 .then(reponse=>{
    return reponse.json();
 })
 .then(data=>{
    console.log(data);
 })
 .catch(error=>{
    console.error("Error fetching data:", error);
 })