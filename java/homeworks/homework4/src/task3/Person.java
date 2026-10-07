package task3;

public class Person implements Comparable<Person> {
    private static int nextId = 1;

    private int id;
    private String fullName;
    private int age;
    private Gender gender;

    public Person(String fullName, int age, Gender gender) {
        this.id = nextId++;
        this.fullName = fullName;
        this.age = age;
        this.gender = gender;
    }

    public int getId() {
        return id;
    }

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public Gender getGender() {
        return gender;
    }

    public void setGender(Gender gender) {
        this.gender = gender;
    }

    @Override
    public String toString() {
        return "Person{" +
                "id=" + id +
                ", fullName='" + fullName + '\'' +
                ", age=" + age +
                ", gender=" + gender +
                '}';
    }

    @Override
    public int compareTo(Person o) {
        return Integer.compare(this.id, o.id);
    }
}
