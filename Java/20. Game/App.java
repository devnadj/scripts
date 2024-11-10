import java.util.Scanner;
import java.util.Random;
import java.util.Arrays;
import java.util.ArrayList;
import java.util.List;
import java.util.Collections;
import java.util.Comparator;
import java.util.HashMap;  
import java.util.Map;
package com.example.user;


import com.example.user.User;


/**
 * App
 */
public class App {

    public static void main(String[] args) {
        System.out.println("Hello, World!");
        User user = new User("John Doe");

        System.out.println(user.getName());
    }   
}