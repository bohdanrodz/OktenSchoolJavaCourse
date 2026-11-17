package models;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import org.hibernate.Session;

import java.util.List;

@Entity
@NoArgsConstructor
@Getter
@Setter
@ToString
public class Employee {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;
    private int salary;
    @ManyToOne(cascade = CascadeType.ALL)
    @JoinTable(
            name = "employee_department",
            joinColumns = @JoinColumn(name = "employee_id"),
            inverseJoinColumns = @JoinColumn(name = "department_id")
    )
    private Department department;

    public Employee(String name, int salary, Department department) {
        this.name = name;
        this.salary = salary;
        this.department = department;
    }

    public static void addEmployees(Session session, List<Employee> employees) {
        for (Employee employee : employees) {
            session.persist(employee);
        }
    }

    public static List<Employee> getEmployeesFromDepartment(Session session, Department department) {
        return session.createQuery("select e from Employee e where e.department = :neededDepartment", Employee.class)
                .setParameter("neededDepartment", department)
                .list();
    }

    public static List<Employee> getSortNameFilterSalary(Session session, int salaryToFilter) {
        return session.createQuery("select e from Employee e where e.salary > :salary order by e.name desc", Employee.class)
                .setParameter("salary", salaryToFilter)
                .list();
    }

}
