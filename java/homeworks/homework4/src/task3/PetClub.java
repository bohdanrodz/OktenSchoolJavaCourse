package task3;

import java.util.*;

public class PetClub {
    private Map<Person, List<Pet>> club = new TreeMap<>();

    public Map<Person, List<Pet>> getClub() {
        return club;
    }

    public void addMember(Person person) {
        club.put(person, new ArrayList<Pet>());
    }

    public void addPet(int personId, Pet pet) {
        Person person = club.keySet().stream().filter(p -> p.getId() == personId).findFirst().orElse(null);
        if (person != null) {
            club.get(person).add(pet);
        }
    }

    public void removePet(int personId, int petId) {
        Person person = club.keySet().stream().filter(p -> p.getId() == personId).findFirst().orElse(null);
        if (person != null) {
            Pet pet = club.get(person).stream().filter(p -> p.getPetId() == petId).findFirst().orElse(null);
            if (pet != null) {
                club.get(person).remove(pet);
            }
        }
    }

    public void removePerson(int personId) {
        Iterator<Map.Entry<Person, List<Pet>>> iterator = club.entrySet().iterator();
        while (iterator.hasNext()) {
            Map.Entry<Person, List<Pet>> next = iterator.next();
            if (next.getKey().getId() == personId) {
                iterator.remove();
                break;
            }
        }
    }

    public void removePetFromAll(int petId) {
        Iterator<List<Pet>> petListIterator = club.values().iterator();
        while (petListIterator.hasNext()) {
            List<Pet> pets = petListIterator.next();
            Iterator<Pet> petIterator = pets.iterator();
            while (petIterator.hasNext()) {
                if (petIterator.next().getPetId() == petId) {
                    petIterator.remove();
                }
            }
        }
    }

    @Override
    public String toString() {
        return "PetClub{" +
                "club=" + club +
                '}';
    }
}
