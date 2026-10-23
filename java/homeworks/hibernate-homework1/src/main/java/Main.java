import models.Word;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.boot.Metadata;
import org.hibernate.boot.MetadataSources;
import org.hibernate.boot.registry.StandardServiceRegistry;
import org.hibernate.boot.registry.StandardServiceRegistryBuilder;

import java.util.List;

public class Main {
    public static void main(String[] args) {
        StandardServiceRegistry serviceRegistry = new StandardServiceRegistryBuilder()
                .configure("hibernate.cfg.xml")
                .build();
        Metadata metadata = new MetadataSources(serviceRegistry)
                .addAnnotatedClass(Word.class)
                .getMetadataBuilder()
                .build();
        SessionFactory sessionFactory = metadata.getSessionFactoryBuilder().build();
        Session session = sessionFactory.openSession();
        session.beginTransaction();

        session.persist(new Word("Roman"));
        session.persist(new Word("Afgan"));
        session.persist(new Word("Zimmerman"));
        session.persist(new Word("Tuman"));
        session.persist(new Word("Kazakhstan"));
        session.persist(new Word("Sharlatan"));

        List<String> list = session.createQuery("select w from Word w", Word.class)
                .list()
                .stream()
                .map(Word::getValue)
                .toList();
        System.out.println(list);


        session.getTransaction().commit();
        session.close();
        sessionFactory.close();

    }
}
