// const tinderUser = new object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Carry"
tinderUser.isloggedIN = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        Userfullname: {
            firstname: "Divyansh",
            lastname: "Vashishtth"
        }
    }
}

// console.log(regularUser.fullname.Userfullname);

const obj1 = {1: "a" , 2: "b"}
const obj2 = {3: "c" , 4: "d"}


// const obj3 = Object.assign({} , obj1 , obj2)
// console.log(obj3);

const obj3 = {...obj1 , ...obj2}
console.log(obj3);


const course = {
    course_name: "Js in hindi",
    price: "999",
    courseInstructor: "Hitesh"
}

const {courseInstructor: instructor} = course

console.log(instructor);

