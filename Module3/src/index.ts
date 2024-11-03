{type Person = {
    id: number;
    name: string;
    age: number;
  };
  
  function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
  }
  
  const person: Person = {
    id: 1,
    name: "Rehad",
    age: 25,
  };
  
  console.log(getProperty(person, "name"));
//   console.log(getProperty(person, "age"));  
}
  