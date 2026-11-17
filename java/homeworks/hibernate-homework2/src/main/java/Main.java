import models.Course;
import models.Department;
import models.Employee;
import models.Student;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.boot.Metadata;
import org.hibernate.boot.MetadataSources;
import org.hibernate.boot.registry.StandardServiceRegistry;
import org.hibernate.boot.registry.StandardServiceRegistryBuilder;

import java.util.List;

public class Main {
    public static void main(String[] args) {
        StandardServiceRegistry serviceRegistry = new StandardServiceRegistryBuilder()
                .configure("hibernate.cfg.xml")
                .build();
        Metadata metadata = new MetadataSources(serviceRegistry)
                .addAnnotatedClass(Student.class)
                .addAnnotatedClass(Course.class)
                .addAnnotatedClass(Employee.class)
                .addAnnotatedClass(Department.class)
                .getMetadataBuilder()
                .build();
        SessionFactory sessionFactory = metadata.getSessionFactoryBuilder().build();
        Session session = sessionFactory.openSession();
        session.beginTransaction();

        /// task 1
//        List<Student> students = List.of(new Student("Jason", 26, "Java"),      /*список до завдання 1*/
//                new Student("Nicolas", 42, "C++"),
//                new Student("Arkadii", 37, "1C"),
//                new Student("Misha", 55, "JS"));
//
//        Student.addStudents(session, students);
//
//        Student studentById = Student.getStudentById(session, 3);
//        System.out.println(studentById);


        ///  task 2
        Course java = new Course("Java", "Java programming");
        Course cpp = new Course("C++", "C++ programming");
        Course js = new Course("JavaScript", "Web development");

        List<Student> students2 = List.of(
                new Student("Jason", 26, List.of(java, js)),
                new Student("Nicolas", 42, List.of(js)),
                new Student("Arkadii", 37, List.of(java, cpp)),
                new Student("Misha", 55, List.of(js, java))
        );

        Student.addStudents(session, students2);

        List<Student> cppStudents = Student.getStudentsByCourse(session, cpp);
        System.out.println(cppStudents);

        /// task 3
        Department it = new Department("IT");
        Department hr = new Department("HR");
        Department marketing = new Department("Marketing");

        List<Employee> employees = List.of(
                new Employee("John Smith", 7500, it),
                new Employee("Olivia Johnson", 6200, hr),
                new Employee("Oleksandr Shevchenko", 9500, it),
                new Employee("Anastasiia Kovalenko", 5800, marketing),
                new Employee("Dmytro Melnyk", 8200, marketing)
        );

        Employee.addEmployees(session, employees);

        List<Employee> employeesFromIt = Employee.getEmployeesFromDepartment(session, it);
        System.out.println(employeesFromIt);

        List<Employee> filteredEmployees = Employee.getSortNameFilterSalary(session, 9000);
        System.out.println(filteredEmployees);


        session.getTransaction().commit();

        session.close();
        sessionFactory.close();


    }
}
