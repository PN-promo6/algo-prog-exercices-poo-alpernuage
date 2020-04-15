class Playground {
    public static void main(String[ ] args) {
        ConcertTicket firstTicket = new ConcertTicket("Mozart", "Aix-en Provence", "08/04/2020", 25, "Alper");
        ConcertTicket secondTicket = new ConcertTicket("Mozart", "Aix-en Provence", "10/04/2020", 16 );
        System.out.println(firstTicket.htmlDetails());
        System.out.println(secondTicket.htmlDetails());
    }
}

class ConcertTicket {
  private String artist;
  private String city;
  private String dateConcert;
  private int placeNo;
  private String clientName = "";

  public ConcertTicket(String artist, String city, String dateConcert, int placeNo) {
    this.artist = artist;
    this.city = city;
    this.dateConcert = dateConcert;
    this.placeNo = placeNo;
    }
  public ConcertTicket(String artist, String city, String dateConcert, int placeNo, String clientName) {
    // call first constructor
    this(artist, city, dateConcert, placeNo);
    this.clientName = clientName;
    }


  public String htmlDetails() {
    String htmlContent = "<p>Name of artiste: "+this.artist+"</p><p>City: "+this.city+"</p><p>Date: "+this.dateConcert+"</p><p>Place No: "+this.placeNo+"</p>";
    if (this.clientName != "") {
      htmlContent = htmlContent + "<p>Client Name: "+this.clientName+" </p>";
    }
    return htmlContent;
  }
}
