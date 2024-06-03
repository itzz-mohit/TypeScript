// const user: (string | number)[] = [1, "hc"]
let tUser: [string, number, boolean];

tUser = ["hc", 131, true];

let rgb: [number, number, number] = [255, 123, 112];

type User = [number, string];

const newUser: User = [112, "example@google.com"];

newUser[1] = "mk.com";
newUser.push("hello");

// not allowed bcoz boolean is not passed in the tuple
// newUser.push(true)

console.log(newUser);

export {};
