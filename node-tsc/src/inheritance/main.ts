import PhysicalProductInheritance from "./PhysicalProduct";
import DigitalProductInheritance from "./DigitalProduct";

const physical = new PhysicalProductInheritance("Geladeira", 3000, 50);
const digital = new DigitalProductInheritance("Software", 500, 1024);

physical.display();
digital.display();