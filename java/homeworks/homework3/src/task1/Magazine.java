package task1;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class Magazine implements Printable {
    private String name;
    private int year;

    @Override
    public void print() {
        System.out.println(name + " (" + year + ")");
    }
}
