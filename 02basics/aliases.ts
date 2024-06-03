type User = {
  name: string;
  email: string;
  isActive: boolean;
};

function createUser(user: User): User {
  return { name: "mohit", email: "m@k.com", isActive: true };
}

createUser({ name: "mohit", email: "m@k.com", isActive: true });
