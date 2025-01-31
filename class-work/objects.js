//Assignment #1
//Write a function that takes a user as an input and greets them with their name and age
//Assignment #2
//Write a function that takes a new object as input which has name , age  and gender and greets the user with their gender (Hi Mr/Mrs/Others harkirat, your age is 21)
//Assignment #3
//Also tell the user if they are legal to vote or not

const { array } = require("zod")


let users={
    name:"Saujanya",
    age:25
}

function greet(objUsers){
    console.log("hi " +objUsers.name+". you are of "+objUsers.age+" years")
}

//greet(users);


let users2={
    name:"Saujanya",
    age:35,
    gender:"Female"
}

function greet1(objUser1){
    if(objUser1.gender=="Female"){
        console.log("hi Ms." +objUser1.name+". you are of "+objUser1.age+" years")
    }
    else{
        console.log("hi Mr." +objUser1.name+". you are of "+objUser1.age+" years")
    }

}

//greet1(users2)

function legalAge(objuser1){
    if(objuser1.age>=18){
        console.log("legal")
    }
        else{
            console.log("not legal")
        }
    }

    //legalAge(users)



   // Write a function that takes an array of numbers as input, and returns a new array with only even values. Read about filter in JS

let num= new Array(20,88,55,99,90)
const result = num.filter(evenNum);

   function evenNum(arr){
            return(arr%2==0)
   }

  // console.log(result)



  // Write a function that takes an array of users as inputs and returns only the users who are more than 18 years old

  let userwho=[
    {
        name:"saujaya",
        age:25
    },
    {
        name:"satyam",
        age:26
    },
    {
        name:"Jaina",
        age:3
    }
]
function legalAgeUsers(objUserswho){
    return userwho.filter(user=>user.age>=18)
}



//console.log(legalAgeUsers(userwho))


//
//Create a function that takes an array of objects as input,
//and returns the users whose age > 18 and are male
// 

const usersInfo = [
    { name: "Alice", age: 25, gender: "female" },
    { name: "Bob", age: 17, gender: "male" },
    { name: "Charlie", age: 19, gender: "male" },
    { name: "David", age: 22, gender: "male" }
];

function getAdultMales(users) {
    return users.filter(user => user.age > 18 && user.gender === "male");
}

console.log(getAdultMales(usersInfo))