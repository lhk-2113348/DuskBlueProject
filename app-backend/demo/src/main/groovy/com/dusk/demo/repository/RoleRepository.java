package com.dusk.demo.repository;

import com.dusk.demo.entity.Role;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoleRepository extends JpaRepository<Role, Long> {
    Role findByName(String name);  // 역할 이름으로 찾기 
}