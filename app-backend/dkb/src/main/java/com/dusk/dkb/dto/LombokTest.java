package com.dusk.dkb.dto;

public class LombokTest {
      public static void main(String[] args) {
        UserDTO userDTO = new UserDTO("user123", "password123", "user@example.com", "What is your pet's name?", "Fluffy");

        // Lombok이 제대로 작동하면 getPassword()와 setPassword()가 정상적으로 작동해야 함
        System.out.println(userDTO.getPassword());  // password123
        System.out.println(userDTO.getUsername());  // password123
        System.out.println(userDTO.getEmail());  // password123
        System.out.println(userDTO.getQuestion());  // password123

    }  
}
