type User = {
  readonly _id: string; // read-only property
  name: string;
  email: string;
  isActive: boolean;
  credcardDetails?: number; // optional property
};

let myUser: User = {
  _id: "1245", // initialization of read-only property
  name: "h",
  email: "m@k.com",
  isActive: false,
  //   credcardDetails : 123
};

type cardNumber = {
  cardnumber: string;
};

type cardDate = {
  cardDate: string;
};

type cardDetails = cardNumber &
  cardDate & {
    cvv: number;
  };

myUser.email = "mk@gmail.com";

// myUser._id = "asa";

export {};
