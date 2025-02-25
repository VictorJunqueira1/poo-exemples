import Product from "./Product";
import Stock from "./Stock";

const stock = new Stock();
const product1 = new Product("Notebook", 3500);
const product2 = new Product("Mouse", 150);

stock.addProduct(product1);
stock.addProduct(product2);
stock.listProducts();