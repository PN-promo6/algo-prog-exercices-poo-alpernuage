abstract class Item {
  public name: string;
  public size: number;

  constructor(name: string, size: number) {
    this.name = name;
    this.size = size;
  }
}

class Teleporter extends Item {
  public energy: number;

  constructor(name: string, energy: number) {
    super(name, 3);
    this.energy = energy;
  }
}

class Arrow extends Item {
  public power: number;

  constructor(name: string, power: number) {
    super(name, 1)
    this.power = power;
  }
}

class Player {
  public name: string;
  public life: number;
  public tableItems: Array<Item>;
  public sizeUsed: number;

  constructor(name: string) {
    this.name = name;
    this.life = 3;
    this.tableItems = new Array<Item>();
    this.sizeUsed = 0;
  }

  public inventoryPlace: number = 9;

  public addItem(item: Item): boolean {
    if (item.size <= this.inventoryPlace - this.sizeUsed) {
      this.tableItems.push(item);
      this.sizeUsed += item.size;
      console.log("item added with success");
      return true;
    } else {
      console.log("Sorry. Your item connot to be add. Please try to have enough place for your item " + item.name);
      return false;
    };
  }
}

let firstPlayer: Player = new Player("Boom");

let firstArrow: Arrow = new Arrow("Coco", 20);
let secondArrow: Arrow = new Arrow("Toto", 25);
let thirdArrow: Arrow = new Arrow("Tete", 30);

let firstTeleporter: Teleporter = new Teleporter("Foo", 5);
let secondTeleporter: Teleporter = new Teleporter("Bar", 10);
let thirdTeleporter: Teleporter = new Teleporter("Baz", 15);

firstPlayer.addItem(secondArrow);
firstPlayer.addItem(firstArrow);
firstPlayer.addItem(thirdArrow);

firstPlayer.addItem(firstTeleporter);
firstPlayer.addItem(secondTeleporter);
firstPlayer.addItem(thirdTeleporter);

console.log(firstPlayer);

// Exercice 7 à réaliser en TypeScript et Java
// L'exercice suivant prend le cas d'un jeu vidéo où le joueur incarne un personnage. Ce
// personnage possède un inventaire qu'il peut remplir avec des items. Les items sont de
// différents types (médicaments, clés, munitions, etc.) et l'inventaire possède 9 emplacements.
// Chaque item possède une taille :
// - si un item a une taille de 1, il prend 1 emplacement dans l'inventaire
// - si un item a une taille de 2, il prend 2 emplacements dans l'inventaire
// - etc.
// Créez une classe abstraite Item possédant en attributs un nom (chaîne) et une taille (entier).
// Créez une classe Teleporter, qui hérite de la classe abstraite Item, et qui possède un attribut
// energy (entier). Cet item a par défaut une taille de 3.
// Créez une classe Arrow, qui hérite de la classe abstraite Item, et qui possède un attribut
// power (entier). Cet item a par défaut une taille de 1.
// Créez une classe Player qui possède :
// - en attribut, un nom (chaîne)
// - en attribut, un nombre de vie (entier) initialisé à 3
// - en attribut un tableau d'items (en TS, utilisez le type Array, en Java le type ArrayList
// )
// - une méthode qui prend en paramètre un item, et qui tente d'ajouter l'item au
// tableau d'items. Cette méthode retourne : l'objet booléen False si l'item est trop gros
// pour être ajouté au tableau ou si l'inventaire est plein, True si l'item a bien été ajouté
// Créez une instance de Player, plusieures instances de Teleporter et Arrow.
// Ajoutez des instances de Teleporter et Arrow dans l'inventaire du joueur.
// Faites en sortes que lorsqu'on tente d'ajouter un item à l'inventaire :
// - si l'item a été ajouté, on affiche en console le nom de l'ensemble des items dans
// l'inventaire
// - si l'item n'a pas pu être ajouté, on affiche en console "L'item ne peut pas être
// ajouté : faites de la place dans votre inventaire !"
