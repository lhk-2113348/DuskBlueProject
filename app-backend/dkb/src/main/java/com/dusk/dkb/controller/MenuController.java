package com.dusk.dkb.controller;

import com.dusk.dkb.dto.MenuDTO;
import com.dusk.dkb.service.MenuService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.dusk.dkb.service.MenuServiceImpl;

@RestController
@RequestMapping("/api/menus")
public class MenuController {

    @Autowired
    private MenuService menuService;

    @PostMapping
    public ResponseEntity<String> addMenu(@RequestBody MenuDTO menuDTO) {
        // 메뉴 등록
        boolean isSuccess = menuService.addMenu(menuDTO);
        if (isSuccess) {
            return new ResponseEntity<>("메뉴가 성공적으로 등록되었습니다.", HttpStatus.CREATED);
        }
        return new ResponseEntity<>("메뉴 등록 실패", HttpStatus.BAD_REQUEST);
    }

    @PutMapping("/{id}")
    public ResponseEntity<String> updateMenu(@PathVariable Long id, @RequestBody MenuDTO menuDTO) {
        // 메뉴 수정
        boolean isSuccess = MenuServiceImpl.updateMenu(id, menuDTO);
        if (isSuccess) {
            return new ResponseEntity<>("메뉴가 성공적으로 수정되었습니다.", HttpStatus.OK);
        }
        return new ResponseEntity<>("메뉴 수정 실패", HttpStatus.BAD_REQUEST);
    }
}