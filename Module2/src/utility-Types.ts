{
    //utility types
    // Pick
    type Person = {
      name: string;
      age: number;
      email?: string;
      contactNo: string;
    };
  
    type NameAge = Pick<Person, "name" | "age">;
    
  
    // Omit
    type ContactInfo = Omit<Person, "name" | "age">;
  
    // Required
    type PersonRequired = Required<Person>;
  
    // Partial
    type PersonPartial = Partial<Person>;
  
    // Readonly
    type PersonReadonly = Readonly<Person>;
  
    const person1: PersonReadonly = {
      name: "Mr. XY",
      age: 200,
      contactNo: "017",
    };
    // person1.name = "Mr. YZ";
  
    // Record
    // type MyObj = {
    //   a: string;
    //   b: string;
    // };
  
    type MyObj = Record<string, number>;
  
    const EmptyObj: Record<string, unknown> = {};
  
    const obj1: MyObj = {
      a: 2,
      b: 4,
      c: 6,
      d: 2,
      e: 6,
    };
  
    //
  }