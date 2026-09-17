package homework.task2;

public class Engine {
    private boolean reliable;
    private int horsepower;

    public Engine(boolean reliable, int horsepower) {
        this.reliable = reliable;
        this.horsepower = horsepower;
    }

    @Override
    public String toString() {
        return "Engine{" +
                "reliable=" + reliable +
                ", horsepower=" + horsepower +
                '}';
    }
}
