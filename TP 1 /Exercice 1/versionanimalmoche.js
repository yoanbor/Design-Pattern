//-------------------------------------------------
class Animal {
  crier() {}
}

class Dog extends Animal {
  crier() {
    return "waffff";
  }
}

class Cat extends Animal {
  crier() {
    return "miaouuu";
  }
}

class Horse extends Animal {
  crier() {
    return "huuuu";
  }
}

class AnimalFactory {
  createAnimal(key) {
    switch (key) {
      case "Cat":
        return new Cat();
      case "Dog":
        return new Dog();
      case "Horse":
        return new Horse();

      default:
        break;
    }
  }
}

const animalFactory = new AnimalFactory();

const monChat = animalFactory.createAnimal("Cat");
console.log(monChat.crier());

const monChien = animalFactory.createAnimal("Dog");
console.log(monChien.crier());

const monCheval = animalFactory.createAnimal("Horse");
console.log(monCheval.crier());
