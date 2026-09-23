package task2;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class Trumpet implements Instrument {
    private int diameter;

    @Override
    public void play() {
        System.out.println("A Trumpet with diameter of " + diameter + " is playing");
    }
}
