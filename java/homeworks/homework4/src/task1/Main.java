package task1;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        List<User> users = new ArrayList<>();
        users.add(new User(50,"Vasyl"));
        users.add(new User(72,"Mykola"));
        users.add(new User(33,"Dmytro"));
        users.add(new User(42,"John"));
        users.add(new User(80,"Afanasii"));

//        users.sort((u1, u2) -> u1.getAge() - u2.getAge());
        users.sort(Comparator.comparingInt(User::getAge));
        System.out.println(users);
        users.sort((u1, u2) -> u2.getAge() - u1.getAge());
        System.out.println(users);

//        users.sort((u1, u2) -> u1.getName().length() - u2.getName().length());
        users.sort(Comparator.comparingInt(u -> u.getName().length()));
        System.out.println(users);
        users.sort((u1,u2) -> u2.getName().length() - u1.getName().length());
        System.out.println(users);

//      task 2
        ArrayList<String> strings = new ArrayList<>(List.of("Vasyl", "Mykola", "Dmytro", "John","one","two","three","four","five","six","seven","eight","nine","ten", "eleven","twelve","thirteen","fourteen","fifteen"));
//        strings.sort((s1,s2) -> s1.compareTo(s2));
        strings.sort(Comparator.naturalOrder());
        System.out.println(strings);


    }
}
