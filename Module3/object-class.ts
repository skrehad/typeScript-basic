class Car {
  brand: string;
  constructor(brand: string) {
    this.brand = brand;
  }
  drive() {
    console.log(`${this.brand} is driving.`);
  }
}

const myCar = new Car("Toyota");
myCar.drive(); // Output: "Toyota is driving."
