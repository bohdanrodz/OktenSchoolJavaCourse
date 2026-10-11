package task2;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;

public class Main {
    public static void main(String[] args) throws IOException {
        Student student1 = new Student("Jeremy", 20, 3);
        Student student2 = new Student("Mike", 19, 5);
        Student student3 = new Student("Karen", 22, 1);
        Student student4 = new Student("Jane", 24, 2);
        List<Student> students = new ArrayList<Student>(List.of(student1, student2, student3, student4));

        Path path = Path.of(System.getProperty("user.dir") + File.separator + "java" + File.separator + "homeworks"
                + File.separator + "homework5" + File.separator + "src" + File.separator + "task2" + File.separator + "file.txt");

        List<String> studentsToString = students.stream()
                .map(student -> student.getName() + "_" + student.getAge() + "_" + student.getAcademicYear()).toList();
        Files.write(path, studentsToString);

        List<String> studentsFromFile = Files.readAllLines(path);

        studentsFromFile.sort(Comparator.comparingInt(o -> Integer.parseInt(o.split("_")[1])));
        studentsFromFile.forEach(System.out::println);



    }
}
