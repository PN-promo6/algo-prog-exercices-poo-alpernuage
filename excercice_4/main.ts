class Client {
  private name: string;
  private accountNo: number;
  constructor(name: string, accountNo: number) {
    this.name = name;
    this.accountNo = accountNo;
  }
  findAccountNo(): number {
    return this.accountNo;
  }
  getName(): string {
    return this.name;
  }
  setName(name: string): void {
    this.name = name;
  }
}

let clientOne: Client = new Client("Alper", 254002);
console.log(clientOne.findAccountNo());
clientOne.setName("Alp");
console.log(clientOne.getName());


// Créez une classe représentant un client d’une banque avec :
// - un constructeur
// - un attribut privé pour le nom
// - un attribut privé pour le numero de compte en banque
// - une méthode pour connaître le numero de compte en banque
//
// Dans un algorithme, créez une instance de cette classe et afficher le numéro de compte en banque d’un client.
