package task1;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class Book implements Printable {
    private String title;
    private String author;

    @Override
    public void print() {
        System.out.println(author + ": " + title);
    }
}
