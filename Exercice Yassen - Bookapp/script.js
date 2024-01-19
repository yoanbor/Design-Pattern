// Book
class Book {
  constructor(title, author, description, pages, currentPage, read) {
    (this.title = title),
      (this.author = author),
      (this.description = description),
      (this.pages = pages),
      (this.currentPage = currentPage),
      (this.read = read);
  }

  getTitle = function () {
    console.log("Titre du livre : " + this.title);
  };

  setTitle = function (title) {
    this.title = title;
  };

  readBook = function (page) {
    this.currentPage = page;
  };
}

class Library {
  constructor() {
    this.books = [];
  }

  addBook(book) {
    // Ajouter un livre au tableau books
    this.books.push(book);
  }

  removeBook(book) {
    // Supprimer un livre du tableau books
    const index = this.books.indexOf(book);
    this.books.splice(index, 1);
    console.log("Le livre " + (index + 1) + " a été supprimé");
  }

  displayBooks() {
    // Afficher les titres des livres dans le tableau books
    this.books.forEach((book) => {
      console.log("Le titre du livre est : " + book.title);
    });
  }
}

const book1 = new Book(
  "Cent ans de solitude",
  "Gabriel García Márquez",
  "Ce chef-d'œuvre de la littérature latino-américaine raconte l'histoire épique de la famille Buendía sur plusieurs générations dans la ville fictive de Macondo. Mêlant réalisme magique et éléments fantastiques, le roman explore des thèmes tels que l'amour, la solitude et le destin.",
  417,
  12,
  true
);
const book2 = new Book(
  "1984",
  "George Orwell",
  "Dans ce classique de la dystopie, Orwell décrit un monde totalitaire où le gouvernement contrôle la pensée des individus. Winston Smith, le protagoniste, lutte contre la manipulation de la vérité et de la réalité par le Parti.",
  328,
  19,
  true
);
const book3 = new Book(
  "Le Seigneur des Anneaux",
  "J.R.R. Tolkien",
  "Cette trilogie épique (composée de La Communauté de l'Anneau, Les Deux Tours et Le Retour du Roi) raconte la quête pour détruire l'Anneau Unique et sauver la Terre du Milieu de la domination de Sauron. Elle explore des thèmes tels que l'amitié, le pouvoir et le sacrifice.",
  1200,
  0,
  false
);
const book4 = new Book(
  "Orgueil et Préjugés",
  "Jane Austen",
  "Cette comédie romantique classique explore la vie de la famille Bennet au début du XIXe siècle en Angleterre. L'histoire se concentre sur la relation complexe entre Elizabeth Bennet et Mr. Darcy, tout en abordant les questions de classe sociale et de mariage.",
  279,
  270,
  true
);
const book5 = new Book(
  "L'Étranger",
  "Albert Camus",
  "Ce roman existentialiste raconte l'histoire de Meursault, un homme indifférent à la société et déconnecté de ses propres émotions. L'intrigue se déroule dans l'Algérie coloniale et explore la question de l'absurdité de l'existence.",
  123,
  123,
  true
);

const library = new Library();
// Ajouter les livres à la bibliothèque
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.addBook(book4);
library.addBook(book5);

library.displayBooks();
library.removeBook(book1);
library.displayBooks();
