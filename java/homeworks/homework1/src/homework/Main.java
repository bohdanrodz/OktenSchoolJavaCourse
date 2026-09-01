package homework;

import java.util.ArrayList;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        Post post1 = new Post(1, 1, "Cranberry", "berry berry berry berry berry");
        Post post2 = new Post(1, 2, "Cappuccino", "cappuccino cappuccino cappuccino");
        Post post3 = new Post(2, 3, "Hector", "hector hector hector hector hector");
        Post post4 = new Post(2, 4, "Salamanca", "salamanca salamanca salamanca");
        Post post5 = new Post(5, 5, "Jon Snow", "jon snow jon snow jon snow");

        ArrayList<Post> posts = new ArrayList(List.of(post1, post2, post3, post4, post5));

        for (Post post : posts) {
            System.out.println(post);
        }

        System.out.println();

        Comment comment1 = new Comment(1, 1, "Tony", "tony@gmail.com", "tony tony tony");
        Comment comment2 = new Comment(1, 2, "Soprano", "soprano@gmail.com", "soprano soprano soprano");
        Comment comment3 = new Comment(2, 4, "Harvey", "harvey@gmail.com", "harvey harvey harvey");
        Comment comment4 = new Comment(54, 45, "Specter", "specter@gmail.com", "specter specter specter");
        Comment comment5 = new Comment(859, 567, "Lion", "lion@gmail.com", "lion lion lion");
        ArrayList<Comment> comments = new ArrayList(List.of(comment1, comment2, comment3, comment4, comment5));

        for (Comment comment : comments) {
            System.out.println(comment);
        }
    }
}
