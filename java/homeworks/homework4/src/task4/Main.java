package task4;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

public class Main {
    public static void main(String[] args) {
        List<String> list = new ArrayList<>(List.of("one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen",
                "fourteen", "fifteen", "sixteen", "seventeen", "eighteen"));
        list = list.stream().filter(s -> s.length() < 4).sorted().collect(Collectors.toCollection(ArrayList::new));
        System.out.println(list);

        System.out.println("-------------------------------------");

        List<Integer> integers = new ArrayList<>(List.of(1,2,100,53,3534,678678,879789,234234,76,987,200,7,2,987,23,5,56,87,345,7));
        integers = integers.stream().sorted(Integer::compareTo).collect(Collectors.toCollection(ArrayList::new));
        System.out.println(integers); /*posortovani*/
        ArrayList<Integer> multiplesOfThree = integers.stream().filter(i -> i % 3 == 0).collect(Collectors.toCollection(ArrayList::new));
        System.out.println(multiplesOfThree);
        ArrayList<Integer> multiplesOfTen = integers.stream().filter(i -> i % 10 == 0).collect(Collectors.toCollection(ArrayList::new));
        System.out.println(multiplesOfTen);
        integers.forEach(System.out::println);
        ArrayList<Integer> multipliedByThree = integers.stream().map(i -> i * 3).collect(Collectors.toCollection(ArrayList::new));
        System.out.println(multipliedByThree);
    }

}
