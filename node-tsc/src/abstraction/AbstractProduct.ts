abstract class AbstractProduct {
    protected name: string;
    protected price: number;

    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }

    abstract display(): void;
}

export default AbstractProduct;