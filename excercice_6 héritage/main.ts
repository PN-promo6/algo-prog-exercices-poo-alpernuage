class Client {
  public name: string;
  public accountNo: any;

  constructor(name: string, accountNo: number) {
    this.name = name;
    this.accountNo = accountNo;
  }
  public findAccountNo(): number {
    return this.accountNo;
  }
  public getName(): string {
    return this.name;
  }
  public setName(name: string): void {
    this.name = name;
  }
}

class ClientPro extends Client {
  public siretNo: number;

  constructor(name: string, accountNo: number, siretNo: number) {
    super(name, accountNo);
    this.siretNo = siretNo;
  }
  public getSiretNo(): number {
    return this.siretNo;
  }
}

// Octal numbers arent avalible so we use o after 0. But we have a number octal dot a decimal
let ClientOne: Client = new Client("Alex", 0o11);
console.log(ClientOne.name, ClientOne.accountNo);
let ClientProOne: ClientPro = new ClientPro("Alper", 254002, 123456);
console.log(ClientProOne.name, ClientProOne.accountNo,ClientProOne.siretNo);
console.log(ClientProOne.findAccountNo());
ClientProOne.setName("Alp");
console.log(ClientProOne.getName());

// Exercice 6 : Créez une classe ClientProProfessionnel qui étend la classe ClientPro et qui a comme attribut un numéro SIRET.
