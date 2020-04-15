class ConcertTicket {
  private artist: string;
  private city: string;
  private dateConcert: string;
  private placeNo: number;
  private clientName: string = "";
  constructor(artist: string, city: string, dateConcert: string, placeNo: number, clientName?: string) {
    this.artist = artist;
    this.city = city;
    this.dateConcert = dateConcert;
    this.placeNo = placeNo;
    if (clientName) {
      this.clientName = clientName;
    }
  }

  htmlDetails(): string {
    let htmlContent: string = `
    <p>Name of artiste: ${this.artist}</p>
    <p>City: ${this.city}</p>
    <p>Date: ${this.dateConcert}</p>
    <p>Place No: ${this.placeNo}</p>`;
    if (this.clientName != "") {
      htmlContent = htmlContent + `<p>Client Name: ${this.clientName} </p>`
    }
    return htmlContent;
  }
}

let firstTicket: ConcertTicket = new ConcertTicket("Mozart", "Aix-en Provence", "08/04/2020", 25, "Alper");
let secondTicket: ConcertTicket = new ConcertTicket("Mozart", "Aix-en Provence", "10/04/2020", 16 );
console.log(firstTicket.htmlDetails());
console.log(secondTicket.htmlDetails());



// Créez une classe représentant une place de concert. Le constructeur de cette classe demande cinq paramètre dont un optionnel.
// La classe possède une méthode retournant en chaîne de caractères les détails de la place de concert sous forme de HTML.
// Exemple basique de chaîne de caractères retournée :
// "<p>Numéro de place : ${ this.username }</p>
// <p>Heure du concert : ${ this.hours }</p>"
//
// Dans un algorithme, créez deux instances de cette classe (la 1ère avec un paramètre optionnel, l’autre sans le paramètre optionnel), et afficher les détails de chaque objet crée.
