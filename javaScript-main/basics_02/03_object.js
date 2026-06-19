// object literals

const mySym = Symbol("key1")
const JsUser = {
    name: "Divyansh",
    [mySym]: "mykey1",
    age: 18,
    location: "Meerut",
    email: "user@example.com",
    isLoggedIN: false
}

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser[mySym]);
console.log(typeof JsUser[mySym]);


JsUser.greeting = function(){
    console.log("hello JS user");
    
}

JsUser.greeting();

JsUser.greetingTwo = function(){
    console.log(`Hello JS user , ${this.name}`);
    
}

JsUser.greetingTwo();