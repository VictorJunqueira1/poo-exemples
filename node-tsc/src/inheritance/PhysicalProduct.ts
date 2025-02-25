import ProductInheritance from "./Product";

class PhysicalProductInheritance extends ProductInheritance {
  private weight: number;

  constructor(name: string, price: number, weight: number) {
    super(name, price);
    this.weight = weight;
  }

  public display(): void {
    console.log(`Produto Físico: ${this.name}, Preço: R$${this.price.toFixed(2)}, Peso: ${this.weight}kg`);
  }
}

export default PhysicalProductInheritance;