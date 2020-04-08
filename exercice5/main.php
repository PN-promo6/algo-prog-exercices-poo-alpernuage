<?php
class ConcertTicket{
  private $artist;
  private $city;
  private $dateConcert;
  private $placeNo;
  private $clientName;

  function __construct ($artist,$city,$dateConcert,$placeNo,$clientName=""){
    $this->artist=$artist;
    $this->city=$city;
    $this->dateConcert=$dateConcert;
    $this->placeNo=$placeNo;
    if ($clientName) {
      $this->clientName=$clientName;
    }
  }

  public function htmlDetails(){
    $htmlContent="
    <p>Name of artiste: ".$this->artist."</p>
    <p>City: ".$this->city." </p>
    <p>Date: ".$this->dateConcert." </p>
    <p>Place No: ".$this->placeNo." </p>";
    if ($this->clientName!="")) {
      $htmlContent=$htmlContent."<p>Client Name: .$this->clientName. </p>";
    }
    return $htmlContent;
  }
}

$firstTicket= new ConcertTicket("Mozart", "Aix-en Provence", "08/04/2020", 25, "Alper");
echo($firstTicket->htmlDetails());
$secondTicket= new ConcertTicket("Mozart", "Aix-en Provence", "08/04/2020", 26);
echo($secondTicket->htmlDetails());
// $firstTicket= new ConcertTicket("Mozart", "Aix-en Provence", "08/04/2020", 25, "Alper");
// print_r($firstTicket);
?>
