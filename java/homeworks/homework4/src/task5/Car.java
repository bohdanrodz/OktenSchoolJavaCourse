package task5;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class Car {
    private String brand;
    private double horsePower;
    private User owner;
    private int price;
    private int year;
}
