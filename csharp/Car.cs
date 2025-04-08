namespace ConsoleApp1;

public class Car
{
    public static List<Car> AllCars { get; } = new();

    public string Brand { get; set; }
    public string Color { get; set; }
    public string Model { get; set; }
    public int MaxSpeed { get; set; }

    public Car(string brand, string color, string model, int maxSpeed)
    {
        Brand = brand;
        Color = color;
        Model = model;
        MaxSpeed = maxSpeed;

        AllCars.Add(this);
    }
}