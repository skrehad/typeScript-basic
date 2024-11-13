{
  class Animal {
    sound() {
      console.log("Some sound");
    }
  }

  class Dog extends Animal {
    sound() {
      console.log("Bark");
    }
  }

  class Cat extends Animal {
    sound() {
      console.log("Meow");
    }
  }

  const animals: Animal[] = [new Dog(), new Cat()];
  animals.forEach((animal) => animal.sound());
  // Output: "Bark" and "Meow"
}
