package task2;

import java.util.ArrayList;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        Guitar guitar1 = new Guitar(6);
        Guitar guitar2 = new Guitar(7);
        Drum drum1 = new Drum(10);
        Drum drum2 = new Drum(20);
        Trumpet trumpet1 = new Trumpet(15);
        Trumpet trumpet2 = new Trumpet(20);

        ArrayList<Instrument> instruments = new ArrayList<>(List.of(guitar1, guitar2, drum1, drum2, trumpet1, trumpet2));
        for (Instrument instrument : instruments) {
            instrument.play();
        }
    }
}
