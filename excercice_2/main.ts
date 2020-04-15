class FurnitureDesign {
  editor: string;
  designerName: string;
  designYear: number;

  constructor(editor: string, designerName: string, designYear: number) {
    this.editor = editor;
    this.designerName = designerName;
    this.designYear = designYear;
  }
}
let chair: FurnitureDesign = new FurnitureDesign("Wassily", "Marcel Breuer", 1925);
console.log(chair);
chair.designYear = 1926
console.log(chair);
