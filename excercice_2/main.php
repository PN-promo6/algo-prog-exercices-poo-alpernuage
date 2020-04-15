<?php
class FurnitureDesign {
  public $editor;
  public $designerName;
  public $designYear;

  function __construct($editor, $designerName, $designYear) {
    $this->editor = $editor;
    $this->designerName = $designerName;
    $this->designYear = $designYear;
  }
}
$chair = new FurnitureDesign("Wassily", "Marcel Breuer", 1925);
$chair->designYear = 1926;
echo($chair->editor." ".$chair->designerName." ".$chair->designYear);
// print_r($chair);

?>
