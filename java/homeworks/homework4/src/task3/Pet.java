package task3;

public class Pet {
    private static int nextId = 1;
    private int petId;
    private String species;
    private String breed;
    private String name;
    private int age;
    private Sex sex;

    public Pet(String species, String breed, String name, int age, Sex sex) {
        this.petId = nextId++;
        this.species = species;
        this.breed = breed;
        this.name = name;
        this.age = age;
        this.sex = sex;
    }

    public int getPetId() {
        return petId;
    }

    public String getSpecies() {
        return species;
    }

    public void setSpecies(String species) {
        this.species = species;
    }

    public String getBreed() {
        return breed;
    }

    public void setBreed(String breed) {
        this.breed = breed;
    }

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

    public Sex getSex() {
        return sex;
    }

    public void setSex(Sex sex) {
        this.sex = sex;
    }

    @Override
    public String toString() {
        return "Pet{" +
                "petId=" + petId +
                ", species='" + species + '\'' +
                ", breed='" + breed + '\'' +
                ", name='" + name + '\'' +
                ", age=" + age +
                ", sex=" + sex +
                '}';
    }
}
