package homework.task2;


public class Car {
    private String brand;
    private String model;
    private int year;
    private Engine engine;

    public Car(String brand, String model, int year, Engine engine) {  /*aggregation*/
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.engine = engine;
    }

    public Car(String brand, String model, int year, boolean reliable, int horsepower) {  /*composition*/
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.engine = new Engine(reliable, horsepower);
    }

    @Override
    public String toString() {
        return "Car{" +
                "brand='" + brand + '\'' +
                ", model='" + model + '\'' +
                ", year=" + year +
                ", engine=" + engine +
                '}';
    }
}
