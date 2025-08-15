// const promiseOne = new Promise()
// const date = new Date();
/// yeah jo new keyword hai wo constructor function hai 


function user( username , age, email){
    this.username = username;
    this.age = age;
    this.email = email;

 //variable  |  //yeah jo aap pass kar kay day rahaye ho

  return this; //this is a keyword which refers to the current object
}

    // const userOne = user("Akbar", 25, "@gmail.com")
     const userOne = new user("Akbar", 25, "@gmail.com")
     const userTwo = new user("ali", 35, "3@gmail.com")

    console.log(userOne); 
    console.log(userTwo);//undefined