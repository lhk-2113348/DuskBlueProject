package com.dusk.dkb.dto;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.dusk.dkb.entity.Menu;

@Repository
public interface MenuRepository extends JpaRepository<Menu, Long> {
Optional<Menu> findByName(String name);

}
