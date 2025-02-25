abstract class ProductPoly {
    name: string;
    price: number;
    
    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }
    
    abstract display(): void;
}

export default ProductPoly;