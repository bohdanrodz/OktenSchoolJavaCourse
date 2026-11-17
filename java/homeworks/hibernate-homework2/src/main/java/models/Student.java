package models;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import org.hibernate.Session;

import java.io.Serializable;
import java.util.List;

@Entity
@NoArgsConstructor
@Getter
@Setter
@ToString
public class Student implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;
    private int age;

    @ManyToMany(cascade = CascadeType.ALL)
    @JoinTable(name="student_courses", joinColumns = @JoinColumn(name = "student_id"), inverseJoinColumns = @JoinColumn(name="course_id"))
    private List<Course> courses;

    public Student(String name, int age, List<Course> courses) {
        this.name = name;
        this.age = age;
        this.courses = courses;
    }

    public static void addStudents(Session session, List<Student> students) {
        for (Student student : students) {
            session.persist(student);
        }
    }
    public static Student getStudentById(Session session, int id) {
        return session.find(Student.class, id);
    };

    public static List<Student> getStudentsByCourse(Session session, Course course) {
        return session.createQuery("select s from Student s join s.courses c where c.id = :courseId", Student.class)
                .setParameter("courseId", course.getId()).list();
    }

}
