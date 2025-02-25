import PhysicalProduct from "./PhysicalProduct";
import DigitalProduct from "./DigitalProduct";

const physical = new PhysicalProduct("Cadeira", 500);
const digital = new DigitalProduct("Curso Online", 199.99);

physical.display();
digital.display();