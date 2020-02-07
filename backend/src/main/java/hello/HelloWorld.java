package main.java.hello;

import org.joda.time.LocalTime;

public class HelloWorld {
    public static void main(String[] args) {
        LocalTime currentTime = new LocalTime();
        System.out.println("The current local time is: " + currentTime);

        main.java.hello.Greeter greeter = new main.java.hello.Greeter();
        System.out.println(greeter.sayHello());
    }
}
