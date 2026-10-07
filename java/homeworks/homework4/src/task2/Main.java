package task2;

import java.util.*;

public class Main {
    public static void main(String[] args) {
        HashSet<User> hashSet = new HashSet<>();
        ArrayList<Skill> skills = new ArrayList<>(List.of(new Skill("Java", 34), new Skill("Python", 25), new Skill("JavaScript", 25)));
        hashSet.add(new User(1, "Bohdan", "Ruryk", "bohdan@gmail.com", 23, Gender.MALE, skills, "toyota", 2020, 120));
        hashSet.add(new User(2, "Mykola", "Koval", "mykola@gmail.com", 25, Gender.MALE, skills, "BMW", 2018, 180));
        hashSet.add(new User(3, "Anna", "Melnyk", "anna@gmail.com", 22, Gender.FEMALE, skills, "Audi", 2021, 150));
        hashSet.add(new User(4, "Dmytro", "Shevchenko", "dmytro@gmail.com", 28, Gender.MALE, skills, "Mercedes", 2019, 220));
        hashSet.add(new User(5, "Olena", "Bondar", "olena@gmail.com", 24, Gender.FEMALE, skills, "Volkswagen", 2017, 130));
        hashSet.add(new User(6, "Vasyl", "Tkachenko", "vasyl@gmail.com", 31, Gender.MALE, skills, "Ford", 2016, 160));
        hashSet.add(new User(7, "Iryna", "Kravchenko", "iryna@gmail.com", 27, Gender.FEMALE, skills, "Skoda", 2022, 140));
        hashSet.add(new User(8, "Taras", "Moroz", "taras@gmail.com", 29, Gender.MALE, skills, "Volvo", 2020, 190));
        hashSet.add(new User(9, "Maria", "Polishchuk", "maria@gmail.com", 26, Gender.FEMALE, skills, "Mazda", 2018, 145));
        hashSet.add(new User(10, "Andrii", "Romanenko", "andrii@gmail.com", 33, Gender.MALE, skills, "Honda", 2015, 125));

        Iterator<User> hashIterator = hashSet.iterator();
        while (hashIterator.hasNext()) {
            User user = hashIterator.next();
            if (user.getGender() == Gender.MALE) {
                hashIterator.remove();
            }
        }
        System.out.println(hashSet);
        System.out.println("-----------------------------------------------");

        ArrayList<Skill> skills1 = new ArrayList<>(List.of(new Skill("C++", 20)));
        ArrayList<Skill> skills2 = new ArrayList<>(List.of(new Skill("PHP", 25)));
        TreeSet<User> treeSet = new TreeSet<>();
        treeSet.add(new User(1, "Bohdan", "Ruryk", "bohdan@gmail.com", 23, Gender.MALE, skills, "toyota", 2020, 120));
        treeSet.add(new User(2, "Mykola", "Koval", "mykola@gmail.com", 25, Gender.MALE, skills1, "BMW", 2018, 180));
        treeSet.add(new User(3, "Anna", "Melnyk", "anna@gmail.com", 22, Gender.FEMALE, skills2, "Audi", 2021, 150));
        treeSet.add(new User(4, "Dmytro", "Shevchenko", "dmytro@gmail.com", 28, Gender.MALE, skills, "Mercedes", 2019, 220));
        treeSet.add(new User(5, "Olena", "Bondar", "olena@gmail.com", 24, Gender.FEMALE, skills1, "Volkswagen", 2017, 130));
        treeSet.add(new User(6, "Vasyl", "Tkachenko", "vasyl@gmail.com", 31, Gender.MALE, skills2, "Ford", 2016, 160));
        treeSet.add(new User(7, "Iryna", "Kravchenko", "iryna@gmail.com", 27, Gender.FEMALE, skills, "Skoda", 2022, 140));
        treeSet.add(new User(8, "Taras", "Moroz", "taras@gmail.com", 29, Gender.MALE, skills1, "Volvo", 2020, 190));
        treeSet.add(new User(9, "Maria", "Polishchuk", "maria@gmail.com", 26, Gender.FEMALE, skills2, "Mazda", 2018, 145));
        treeSet.add(new User(10, "Andrii", "Romanenko", "andrii@gmail.com", 33, Gender.MALE, skills, "Honda", 2015, 125));

        System.out.println(treeSet);
    }
}
