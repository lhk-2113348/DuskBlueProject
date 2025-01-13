package com.dusk.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import com.dusk.demo.dto.UserDTO;
import com.dusk.demo.service.UserService;

import jakarta.validation.Valid;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@RequestMapping("/auth")
public class UserController {
    @Autowired
    private UserService userService;

    @PostMapping("signup")
    @ResponseStatus(HttpStatus.CREATED) // HTTP 201 상태 코드 반환
    public String signup(@Valid @RequestBody UserDTO userDTO) {  // 반환 타입을 String으로 설정
        userService.registerUser(userDTO);  // 세미콜론 추가
        return "환영합니다";  // 성공 메시지 반환
    }
}
