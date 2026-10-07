package task5;

import java.util.ArrayList;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        User person1 = new User("David Goggins", 60, 55);
        User person2 = new User("Petro Melnyk", 19, 1);
        User person3 = new User("Michael Jordan", 30, 3);
        User person4 = new User("Leonardo DiCaprio", 45, 23);
        Car car1 = new Car("Toyota", 300, person1, 45000, 2004);
        Car car2 = new Car("BMW", 250, person2, 52000, 2010);
        Car car3 = new Car("Audi", 280, person4, 61000, 2015);
        Car car4 = new Car("Mercedes", 320, person1, 73000, 2018);
        Car car5 = new Car("Honda", 180, person2, 28000, 2008);
        Car car6 = new Car("Mazda", 200, person3, 34000, 2012);
        Car car7 = new Car("Volvo", 240, person4, 48000, 2016);
        Car car8 = new Car("Ford", 190, person3, 26000, 2009);
        Car car9 = new Car("Skoda", 170, person4, 30000, 2014);
        Car car10 = new Car("Lexus", 290, person1, 68000, 2020);

        List<Car> cars = new ArrayList<>(List.of(car1,car2,car3,car4,car5,car6,car7,car8,car9,car10));
        cars.stream().filter(car -> car.getHorsePower() >= 250).forEach(car -> car.setHorsePower(car.getHorsePower() * 1.1));
        System.out.println(cars);
        cars.stream()
                .map(Car::getOwner)
                .distinct()
                .filter(driver -> driver.getAge() > 25 && driver.getExperience()<5)
                .forEach(driver -> {
                    System.out.println(driver.getName() + " got sent to the driving school for 1 year");
                    driver.setExperience(driver.getExperience() + 1);
                });
        System.out.println(cars);
    }
}
