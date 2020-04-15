class Playground {
    public static void main(String[ ] args) {
        Client one = new Client("Alex", 987654);
        ClientPro two = new ClientPro("Alper", 254002, 123456);
        System.out.println(one.name + one.accountNo);
        System.out.println(two.name + two.accountNo + two.siret);
    }
}

class Client {
    String name;
    int accountNo;

    Client(String name, int accountNo) {
        this.name = name;
        this.accountNo = accountNo;
    }
}

class ClientPro extends Client {
    int siret;

    ClientPro(String name, int accountNo, int siret) {
        super(name, accountNo);
        this.siret = siret;
    }
}
