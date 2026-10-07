package task3;

public class Main {
    public static void main(String[] args) {
        PetClub petClub = new PetClub();
        Person person1 = new Person("Bohdan Ruryk", 23, Gender.MALE);
        Person person2 = new Person("Jimmy Neutron", 25, Gender.FEMALE);
        Person person3 = new Person("Mykola Koval", 30, Gender.MALE);
        petClub.addMember(person1); /*додав юзерів до клубу*/
        petClub.addMember(person2);
        petClub.addMember(person3);
        Pet pet1 = new Pet("Dog", "Labrador", "Rex", 5, Sex.MALE);
        Pet pet2 = new Pet("Cat", "Siberian", "Murchyk", 3, Sex.MALE);
        Pet pet3 = new Pet("Dog", "Beagle", "Luna", 4, Sex.FEMALE);
        Pet pet4 = new Pet("Parrot", "Macaw", "Rio", 8, Sex.MALE);
        petClub.addPet(1, pet1); /*додав до учасників клубу тваринок*/
        petClub.addPet(1, pet2);
        petClub.addPet(2, pet3);
        petClub.addPet(1, pet3);
        petClub.addPet(3, pet4);

        System.out.println(petClub.getClub());
        petClub.removePet(3, 4); /*видалив тваринку*/
        System.out.println(petClub.getClub());
        petClub.removePerson(3); /*видалив юзера*/
        System.out.println(petClub.getClub());
        petClub.removePetFromAll(3); /*видалив тваринку зі всіх юзерів*/
        System.out.println(petClub); /*вивів зооклуб*/
    }
}
