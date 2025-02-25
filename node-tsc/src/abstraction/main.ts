import PhysicalProductAbs from "./PhysicalProduct";
import DigitalProductAbs from "./DigitalProduct";

const physicalAbs = new PhysicalProductAbs("Mesa", 700);
const digitalAbs = new DigitalProductAbs("E-book", 49.99);

physicalAbs.display();
digitalAbs.display();