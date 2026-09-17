package homework.task2;

public class Main {
    public static void main(String[] args) {
        Engine engine = new Engine(true, 120);
        Car carComposition = new Car("Toyota", "Supra", 2003, true, 300);
        Car carAggregation = new Car("Subaru", "Impreza", 2000, engine);

        System.out.println(carComposition);
        System.out.println(carAggregation);
    }
}
