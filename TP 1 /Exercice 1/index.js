//-------------- Version Design Pattern Builder ---------------
class AnimalFactory {
  createAnimal() {}
}

class CatFactory extends AnimalFactory {
  createAnimal() {
    return new Cat();
  }
}

class DogFactory extends AnimalFactory {
  createAnimal() {
    return new Dog();
  }
}

class HorseFactory extends AnimalFactory {
  createAnimal() {
    return new Horse();
  }
}

class Animal {
  crier() {}
}

class Cat extends Animal {
  crier() {
    return "miaouuu";
  }
}

class Dog extends Animal {
  crier() {
    return "waffff";
  }
}

class Horse extends Animal {
  crier() {
    return "huuuu";
  }
}

const factChat = new CatFactory();
const monChat = factChat.createAnimal();
console.log(monChat.crier());

const factDog = new DogFactory();
const monChien = factDog.createAnimal();
console.log(monChien.crier());

const factHorse = new HorseFactory();
const monCheval = factHorse.createAnimal();
console.log(monCheval.crier());
