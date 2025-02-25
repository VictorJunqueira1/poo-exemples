import ProductPoly from "./Product";

class PhysicalProduct extends ProductPoly {
    display(): void {
        console.log(`Produto Físico: ${this.name}, Preço: R$${this.price.toFixed(2)}`);
    }
}

export default PhysicalProduct;