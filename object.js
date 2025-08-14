// const regularUser={
//     email: "akbarrizvi112@gmail.com",
//     fullname:{
//         userfullname:{
//             firstname: "Akbar",
//             lastname: "Rizvi"
//         }
//     }
// }
// dot notation 
// console.log(regularUser.fullname.userfullname.firstname);
// console.log(regularUser.fullname.userfullname.lastname);


// const obj1={1:"a",2:"b"};
// const obj2={3:"a",4:"b"};

// const obj3 = Object.assign({}, obj1, obj2);
// console.log(obj3);


// Most syntax use from to capture the value from database 

// console.log(Object.getOwnPropertyNames(globalThis));

const course = {
    courseName: "JavaScript",
    price: 100,
    duration: "3 months",
    courseInstructor: "akbar"
}

// different ways to access the properties of an object
 console.log(course.courseName);

// using destructuring to extract properties
 const{courseInstructor} = course;
    console.log(courseInstructor);
// using destructuring to extract properties with alias
 const {duration: dur} = course;
    console.log(dur);