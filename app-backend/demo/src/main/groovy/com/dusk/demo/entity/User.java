package com.dusk.demo.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name="users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;  // 사용자 ID

  @Column(nullable = false, unique = true)
    String username;

    @Column(nullable = false)
    String password;
    
    
    @Column(nullable = false)
    String email;

    @Column(nullable=false)
    String question;

     @Column(nullable=false)
    String answer;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private Role role;

   
    
}
