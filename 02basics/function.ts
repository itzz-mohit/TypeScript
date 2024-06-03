function addTwo(num: number): number {
  return num + 2;
  //   return "mohit";
}

function getUpper(val: string) {
  return 2;
}

function getLower(val: string) {
  return val.toLowerCase();
}

function signUpUser(name: string, email: string, isPaid: boolean) {
  console.log(name);
  console.log(email);
  console.log(isPaid);
}

signUpUser("mohit", "mohit@gmail.com", false);

let loginUser = (name: string, email: string, isPaid: boolean = false) => {};

function consoleError(errmsg: string): void {
  console.log(errmsg);
}
function handleError(errmsg: string): never {
  throw new Error(errmsg);
}

const getHello = (s: string): string => {
  return "";
};

const heros = ["thor", "spiderman", "ironman"];
// const heros = [1, 2, 3]

heros.map((hero): string => {
  return `hero is ${hero}`;
});
