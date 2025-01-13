package com.dusk.dkb.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.dusk.dkb.dto.UserDTO;
import com.dusk.dkb.service.UserService;

@RestController
@RequestMapping("/auth")
public class UserController {
    @Autowired
    private UserService userService;

    @PostMapping("signup")
    @ResponseStatus(HttpStatus.CREATED) // HTTP 201 상태 코드 반환
    public String signup(@Validated @RequestBody UserDTO userDTO) {  // 반환 타입을 String으로 설정
        userService.registerUser(userDTO);  // 세미콜론 추가
        return "환영합니다";  // 성공 메시지 반환
    }
}
