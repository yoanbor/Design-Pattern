//-------------- Version Design Pattern STRATEGIE
class ClientFactory {
  createClient() {}
}

class NormalFactory extends ClientFactory {
  createClient() {
    return new ClientNormal();
  }
}

class PremiumFactory extends ClientFactory {
  createClient() {
    return new ClientPremium();
  }
}

class VipFactory extends ClientFactory {
  createClient() {
    return new ClientVip();
  }
}

class Client {
  
}

class ClientNormal extends Client {

}
class ClientPremium extends Client {
 
}
class ClientVip extends Client {
 
}

// Exemple d'utilisation
const factClientNormal = new NormalFactory();
const clientNormal = factClientNormal.createClient();
console.log("Client Normal donc 10 * 9 = " + clientNormal.calculerPrix(9)); // Output: 90

const factClientPremium = new PremiumFactory();
const clientPremium = factClientPremium.createClient();
console.log(
  "Client Premium mais quantité inférieur à 10 donc 10 * 9 = " +
    clientPremium.calculerPrix(9)
); // Output: 90

const factClientPremium2 = new PremiumFactory();
const clientPremium2 = factClientPremium2.createClient();
console.log(
  "Client Premium mais quantité supérieur à 10 donc 10 * 0.9 * 13 = " +
    clientPremium2.calculerPrix(13)
); // Output: 117

const factClientVip = new VipFactory();
const clientVip = factClientVip.createClient();
console.log(
  "Client VIP mais quantité inférieur à 20 donc 10 * 0.85 * 18 = " +
    clientVip.calculerPrix(18)
); // Output: 153

const factClientVip2 = new VipFactory();
const clientVip2 = factClientVip2.createClient();
console.log(
  "Client VIP mais quantité supérieur à 20 donc 10 * 0.85 * 25 = " +
    clientVip2.calculerPrix(25)
); // Output: 100
