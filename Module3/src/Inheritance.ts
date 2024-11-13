class Animal {
  move() {
    console.log("Animal is moving.");
  }
}

class Dog extends Animal {
  bark() {
    console.log("Dog is barking.");
  }
}

const myDog = new Dog();
myDog.move(); // Output: "Animal is moving."
myDog.bark(); // Output: "Dog is barking."
