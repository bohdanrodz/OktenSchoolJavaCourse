package task2;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class Guitar implements Instrument {
    private int stringsCount;

    @Override
    public void play() {
        System.out.println("A Guitar with " + stringsCount + " strings is playing");
    }
}
