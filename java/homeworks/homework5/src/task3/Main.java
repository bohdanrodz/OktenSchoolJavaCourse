package task3;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.StandardOpenOption;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

public class Main {
    public static void main(String[] args) throws IOException {
        Path coursesPath = Path.of(System.getProperty("user.dir") + File.separator + "java" + File.separator + "homeworks"
                + File.separator + "homework5" + File.separator + "src" + File.separator + "task3" + File.separator + "Courses.txt");
        Path studentsPath = Path.of(System.getProperty("user.dir") + File.separator + "java" + File.separator + "homeworks"
                + File.separator + "homework5" + File.separator + "src" + File.separator + "task3" + File.separator + "Students.txt");
        List<String> courses = Files.readAllLines(coursesPath);
        List<String> students = Files.readAllLines(studentsPath);

        List<Student> studentList = students.stream().map(student -> {
            List<String> studentInfo = List.of(student.split(" ", 2));
            return new Student(Integer.parseInt(studentInfo.get(0)), studentInfo.get(1));
        }).collect(Collectors.toCollection(ArrayList::new));

        List<Course> courseList = courses.stream().map(course -> {
            List<String> courseInfo = List.of(course.split(" ", 3));
            int id = Integer.parseInt(courseInfo.get(0));
            String name = courseInfo.get(1);
            List<Integer> studentsId = Arrays.stream(courseInfo.get(2).split(" ")).map(Integer::parseInt).collect(Collectors.toCollection(ArrayList::new));
            List<Student> studentsInCourse = new ArrayList<>();
            for (Student student : studentList) {
                if (studentsId.contains(student.getId())) {
                    studentsInCourse.add(student);
                }
            }
            return new Course(id, name, studentsInCourse);
        }).collect(Collectors.toCollection(ArrayList::new));

        System.out.println(courseList);
        List<String> coursesToWrite = courseList.stream().map(Course::toString).collect(Collectors.toList());
        Path coursesWithStudentsPath = Path.of(System.getProperty("user.dir") + File.separator + "java" + File.separator + "homeworks"
                + File.separator + "homework5" + File.separator + "src" + File.separator + "task3" + File.separator + "CoursesWithStudents.txt");
        Files.write(coursesWithStudentsPath, coursesToWrite, StandardOpenOption.CREATE);
    }
}
