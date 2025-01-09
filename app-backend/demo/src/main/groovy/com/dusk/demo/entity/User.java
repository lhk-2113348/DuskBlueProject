package com.dusk.demo.entity;

import java.util.Set;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import lombok.Getter;
import lombok.Setter;


@Entity
@Getter
@Setter
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;  // 사용자 ID

    private String username;  // 사용자 이름

    private String password;  // 사용자 비밀번호

    @OneToOne(fetch=FetchType.EAGER)
    @JoinColumn(name="role_id")
    private Role role;

    @OneToMany(mappedBy="user")
    private Set<Menu> menus;

   
    
}
