package homework.task3;

import java.util.ArrayList;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        ArrayList<Skill> skills = new ArrayList<>(List.of(new Skill("js",5),new Skill("react", 5)));
        ArrayList<Skill> skills2 = new ArrayList<>(List.of(new Skill("python",5),new Skill("ml", 5)));
        Car car = new Car("Toyota", 2003, 300);

        User user = new User(1, "Nazar", "Skiba", "kokos@gmail.com", 30, Gender.MALE, skills, car);
        User user2 = new User(2, "Volodia", "Daciuk", "shkaf@gmail.com", 30, Gender.MALE, skills2, "Fiat", 2005, 90);

        System.out.println(user);
        System.out.println(user2);
    }
}
