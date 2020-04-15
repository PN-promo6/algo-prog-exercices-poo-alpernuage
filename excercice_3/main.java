class Playground {
    public static void main(String[ ] args) {
        Person mike = new Person("Mick"); //Initialisation d'une instance de la classe Person
        mike.setLastName("Miller"); //Modification de l'attribut lastName de l'objet mike
        System.out.println(mike.getLastName()); //Affichage de l'attribut lastName de l'objet Mike

        Person jimmy = new Person("Jimmy", "Cash"); //Initialisation d'une instance de la classe Person
        System.out.println(jimmy.introductorySentence()); //Affichage de la phrase de présentation via la méthode introductorySentence() de la classe Person
    }
}
class Person {
    public String firstName; //Attribut correspondant au prénom de la personne
    private String lastName; //Attribut correspondant au nom de la personne
    //Constructeur recquierant un seul paramètre
    public Person(String firstName) {
        this.firstName = firstName;
    }

    //Constructeur recquierant deux paramètres
    public Person(String firstName, String lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    //Accesseur pour l'attribut lastName
    public String getLastName(){
        return this.lastName;
    }

    //Mutateur pour l'attribut lastName
    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    //Méthode retournant une chaîne de caractère présentant la personne
    public String introductorySentence() {
        String sentence = "Hello, I'm " + this.firstName;
        return sentence;
    }
}
