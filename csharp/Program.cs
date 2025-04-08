namespace ConsoleApp1
{
    public static class Program
    {
        public static void Main(string[] args)
        {
            new Car("Volkswagen", "Preto", "Gol", 180);
            new Car("Ford", "Preto", "Mustang", 200);
            new Car("Chevrolet", "Preto", "Camaro", 250);
            new Car("Fiat", "Preto", "Uno", 150);
            new Car("BMW", "Branco", "i8", 300);

            Console.WriteLine("=== TODOS OS CARROS ===");
            foreach (var car in Car.AllCars)
            {
                Console.WriteLine($"{car.Brand} {car.Model} - {car.MaxSpeed} km/h");
            }

            Console.WriteLine("\n=== CARROS RÁPIDOS (ACIMA DE 200) ===");
            foreach (var car in Car.AllCars.Where(c => c.MaxSpeed >= 200))
            {
                Console.WriteLine($"{car.Brand} {car.Model} - {car.MaxSpeed} km/h");
            }

            Console.WriteLine("\n=== CARROS LENTOS (ABAIXO DE 200) ===");
            foreach (var car in Car.AllCars.Where(c => c.MaxSpeed < 200))
            {
                Console.WriteLine($"{car.Brand} {car.Model} - {car.MaxSpeed} km/h");
            }
        }
    }
}