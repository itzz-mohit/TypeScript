const User = {
  name: "mohit",
  email: "mohit@gmail.com",
  isActive: true,
};

// function createUser({ name: string, isPaid: boolean }) {
//   console.log("hello");
// }

function createUsers({ name, isPaid }: { name: string; isPaid: boolean }) {
  console.log("hello");
}

createUsers({ name: "mohit", isPaid: true });

let newUser = { name: "mohit", isPaid: false, email: "m@k.com" };
// createUser(newUser);

function createObject(): {} {
  return {};
}

function createCourse(): { name: string; price: number } {
  return { name: "reactjs", price: 399 };
}

export {};
