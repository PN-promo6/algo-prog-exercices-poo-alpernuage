<?php
class Client {
    private $name;
    private $accountNo;

    function __construct($name, $accountNo) {
        $this->name=$name;
        $this->accountNo=$accountNo;
    }
    function findAccountNo() {
        return $this->accountNo;
    }
    function getName() {
        return $this->name;
    }
    function setName($name) {
        $this->name=$name;
    }
}

$clientOne= new Client("Alper",254002);
echo($clientOne->findAccountNo());
$clientOne->setName("Alp");
echo($clientOne->getName());
 ?>
