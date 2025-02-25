import AbstractProduct from "./AbstractProduct";

class PhysicalProductAbs extends AbstractProduct {
    display(): void {
        console.log(`Produto Físico: ${this.name}, Preço: R$${this.price.toFixed(2)}`);
    }
}

export default PhysicalProductAbs;