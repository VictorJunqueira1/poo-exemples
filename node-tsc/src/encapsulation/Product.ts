class ProductEncapsulation {
  private name: string;
  private price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }

  public getInfo(): string {
    return `Produto: ${this.name}, Preço: R$${this.price.toFixed(2)}`;
  }
}

export default ProductEncapsulation;