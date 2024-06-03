"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var score = 10;
score = 12;
score = "13";
var mohit = { name: "Mohit", id: 123 };
mohit = { username: "Mohit", id: 123 };
function getId(id) {
    console.log(id);
}
getId(1);
getId("1");
// function getId(id: number | string) {
//   if (typeof id === "string") {
//     id.toLowerCase();
//   }
// }
var data1 = [1, 2, 3];
var data2 = ["1", "2", "3"];
// this means either you have to give with number or string not both
var data3 = [1, 2, 3];
var data4 = ["1", 2, false];
var cricketer;
cricketer = "dhoni";
