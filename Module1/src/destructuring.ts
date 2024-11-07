// destructuring

const user = {
    id: 345,
    name: {
      firstName: "Saiful",
      middleName: "Islam",
      lastName: "Rehad",
    },
    contactNo: "0170000000",
    address: "Uganda",
  };
  
  const {
    contactNo,
    name: { middleName },
  } = user;
  
  // array destructuring
  
  const myFriends = ["chandler", "joey", "ross", "rachel", "monica", "phoebe"];
  
  const [, , bestFriend, ...rest] = myFriends; // , , for skip first 2 value