package com.dusk.demo.dto;

import org.springframework.data.jpa.repository.JpaRepository;

import com.dusk.demo.entity.Menu;

public interface MenuRepository extends JpaRepository<Menu, Long> {
}
