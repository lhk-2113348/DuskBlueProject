package com.dusk.demo.dto;

import org.springframework.data.jpa.repository.JpaRepository;

import com.dusk.demo.entity.Role;

public interface RoleRepository extends JpaRepository<Role, Long> {
    Role findByName(String name);  // 역할 이름으로 찾기 
}