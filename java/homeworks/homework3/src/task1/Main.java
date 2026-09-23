package task1;

import java.util.ArrayList;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        Book book1 = new Book("Korol lev", "Maugli");
        Book book2 = new Book("Korol strykoza", "Mr.Muscule");
        Magazine magazine1 = new Magazine("New York Times", 2009);
        Magazine magazine2 = new Magazine("Forbes", 2020);

        ArrayList<Printable> printables = new ArrayList<>(List.of(book1, book2, magazine1, magazine2));

        System.out.println(printables);

    }
}
