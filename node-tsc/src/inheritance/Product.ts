class ProductInheritance {
  protected name: string;
  protected price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }

  public display(): void {
    console.log(`Produto: ${this.name}, Preço: R$${this.price.toFixed(2)}`);
  }
}

export default ProductInheritance;