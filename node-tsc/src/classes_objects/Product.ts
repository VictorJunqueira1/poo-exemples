class Product {
  name: string;
  price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }

  display(): void {
    console.log(`Produto: ${this.name}, Preço: R$${this.price.toFixed(2)}`);
  }
}

export default Product;