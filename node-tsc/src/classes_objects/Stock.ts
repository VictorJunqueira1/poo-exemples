import Product from "./Product";

class Stock {
    products: Product[] = [];

    addProduct(product: Product): void {
        this.products.push(product);
        console.log(`Produto '${product.name}' adicionado ao estoque.`);
    }

    listProducts(): void {
        console.log("Produtos em estoque:");
        this.products.forEach((p) => p.display());
    }
}

export default Stock;