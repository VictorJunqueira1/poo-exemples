import ProductInheritance from "./Product";

class DigitalProductInheritance extends ProductInheritance {
  private fileSize: number;

  constructor(name: string, price: number, fileSize: number) {
    super(name, price);
    this.fileSize = fileSize;
  }

  public display(): void {
    console.log(`Produto Digital: ${this.name}, Preço: R$${this.price.toFixed(2)}, Tamanho: ${this.fileSize}MB`);
  }
}

export default DigitalProductInheritance;