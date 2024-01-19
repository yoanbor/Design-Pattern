class Client {
  constructor(type, quantite) {
    this.type = type;
    this.quantite = quantite;
    this.pricingStrategy = this.determinerStrategie();
  }

  determinerStrategie() {
    switch (this.type) {
      case "normal":
        return new StrategieNormal();
      case "premium":
        return new StrategiePremium();
      case "vip":
        return new StrategieVIP();
      default:
        throw new Error("Type de client invalide");
    }
  }

  setQuantite(quantite) {
    this.quantite = quantite;
  }

  calculerPrix() {
    return this.pricingStrategy.calculerPrix(this.quantite);
  }
}

class StrategieNormal {
  calculerPrix(quantite) {
    return quantite * 10;
  }
}

class StrategiePremium {
  calculerPrix(quantite) {
    return quantite > 10 ? quantite * 10 * 0.9 : quantite * 10;
  }
}

class StrategieVIP {
  calculerPrix(quantite) {
    return quantite > 20 ? quantite * 10 * 0.8 : quantite * 10 * 0.85;
  }
}

// Exemple d'utilisation
const clientNormal = new Client("normal", 9);
console.log(clientNormal.calculerPrix()); // Output: 90

const clientPremium = new Client("premium", 9);
console.log(clientPremium.calculerPrix()); // Output: 90

const clientVIP = new Client("vip", 25);
console.log(clientVIP.calculerPrix()); // Output: 200
