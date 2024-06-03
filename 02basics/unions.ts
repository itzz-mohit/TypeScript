let score: number | string = 10;

score = 12;
score = "13";

type User = {
  name: string;
  id: number;
};

type Admin = {
  username: string;
  id: number;
};

let mohit: User | Admin = { name: "Mohit", id: 123 };

mohit = { username: "Mohit", id: 123 };

function getId(id: number | string) {
  console.log(id);
}

getId(1);
getId("1");

// function getId(id: number | string) {
//   if (typeof id === "string") {
//     id.toLowerCase();
//   }
// }

const data1: number[] = [1, 2, 3];
const data2: string[] = ["1", "2", "3"];

// this means either you have to give with number or string not both
const data3: string[] | number[] = [1, 2, 3];

const data4: (string | number | boolean)[] = ["1", 2, false];

let cricketer: "dhoni" | "kohli" | "rohit";

cricketer = "dhoni";

// cricketer = 'gill'

export {}