package task2;

public class Student {
    private String name;
    private int age;
    private int academicYear;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public int getAcademicYear() {
        return academicYear;
    }

    public void setAcademicYear(int academicYear) {
        this.academicYear = academicYear;
    }

    public Student(String name, int age, int academicYear) {
        this.name = name;
        this.age = age;
        this.academicYear = academicYear;
    }
}
