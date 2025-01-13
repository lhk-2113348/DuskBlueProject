package com.dusk.dkb.dto;

import org.springframework.data.jpa.repository.JpaRepository;

import com.dusk.dkb.entity.User;

public interface UserRepository extends JpaRepository<User, Long> {
    boolean existsByUsername(String username);
}
