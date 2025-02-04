package com.dusk.dkb.dto;

import org.springframework.data.jpa.repository.JpaRepository;

import com.dusk.dkb.entity.UserEntity;

public interface UserRepository extends JpaRepository<UserEntity, Long> {
    UserEntity findByUsername(String username);
}
