import ProductPoly from "./Product";

class DigitalProduct extends ProductPoly {
    display(): void {
        console.log(`Produto Digital: ${this.name}, Preço: R$${this.price.toFixed(2)}`);
    }
}

export default DigitalProduct;