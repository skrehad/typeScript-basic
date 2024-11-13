{
  // In Guard

  type Cat = { meow: () => void };
  type Dog = { bark: () => void };

  function checkAnimal(animal: Cat | Dog) {
    if ("meow" in animal) {
      animal.meow();
    } else {
      animal.bark();
    }
  }

  // type Guard
  class Bird {
    fly() {
      console.log("Bird is flying.");
    }
  }

  function moveAnimal(animal: Bird | Dog) {
    if (animal instanceof Bird) {
      animal.fly();
    } else {
      animal.bark();
    }
  }
}
