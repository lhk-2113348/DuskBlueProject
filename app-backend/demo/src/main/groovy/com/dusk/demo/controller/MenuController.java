package com.dusk.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dusk.demo.service.MenuService;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;

import com.dusk.demo.entity.Menu;


@RestController
@RequestMapping("/menus")
public class MenuController {

    @Autowired
    private MenuService menuService;

    @PostMapping//메뉴 등록
    public ResponseEntity<Menu> createMenu(@RequestParam Long userId, @RequestBody Menu menu) {
        try {
            Menu createdMenu = menuService.createMenu(userId, menu);
            return ResponseEntity.ok(createdMenu); //성공시 등록 메뉴 반환
        } catch (Exception e) {
            return ResponseEntity.status(400).body(null); //실패 시 오류
        }
    }
    }
    
    

