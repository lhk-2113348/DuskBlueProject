package com.dusk.demo.dto;

import org.springframework.data.jpa.repository.JpaRepository;

import com.dusk.demo.entity.User;

public interface UserRepository extends JpaRepository<User, Long> {
    boolean existsByUsername(String username);
}
