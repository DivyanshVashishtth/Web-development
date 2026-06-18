const marvel_heros = ["Ironman" , "Thor" , "Captain america"];
const dc_heros = ["Superman" , "Batman" , "Flash"];

// marvel_heros.push(dc_heros);
console.log(marvel_heros);


// const my_heros = marvel_heros.concat(dc_heros);

// console.log(my_heros);

const all_heros = [...marvel_heros , ...dc_heros];
console.log(all_heros);

console.log(Array.isArray("Divyansh"));
console.log(Array.from("DIvyansh"));
console.log(Array.from({name: "DIvyansh"})); //interseting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1 , score2 , score3));
