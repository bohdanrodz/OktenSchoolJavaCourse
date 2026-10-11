package task1;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.List;

public class Main {
    public static void main(String[] args) throws IOException {
//        Path path = Path.of(System.getProperty("user.home") + File.separator + "somefolder" + File.separator + "somefile.txt");
        Path path = Path.of(System.getProperty("user.dir") + File.separator + "java" + File.separator + "homeworks"
                + File.separator + "homework5" + File.separator + "src" + File.separator + "task1" + File.separator + "file.txt");
        List<String> stringList = Files.readAllLines(path);
        stringList.forEach(System.out::println);
    }
}
