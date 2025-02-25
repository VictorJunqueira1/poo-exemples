import AbstractProduct from "./AbstractProduct";

class DigitalProductAbs extends AbstractProduct {
    display(): void {
        console.log(`Produto Digital: ${this.name}, Preço: R$${this.price.toFixed(2)}`);
    }
}

export default DigitalProductAbs;