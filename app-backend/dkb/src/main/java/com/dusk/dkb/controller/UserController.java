package com.dusk.dkb.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.dusk.dkb.common.ApiResponse;
import com.dusk.dkb.dto.UserDTO;
import com.dusk.dkb.service.AdminService;

@RestController
@RequestMapping("/api/auth")
public class UserController {
    @Autowired
    private AdminService adminService;

    @PostMapping("/login")
    public ResponseEntity<ApiResponse<String>>login(@RequestBody UserDTO userDTO){
        String token=adminService.login(userDTO);
        if(token != null){
            return ResponseEntity.ok(new ApiResponse<>(200,"로그인 성공",token));

        }else{
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(new ApiResponse<>(401, "아이디 혹은 비밀번호가 잘못되었습니다", null));
        }
    }
    
    @PostMapping("/signup")
    @ResponseStatus(HttpStatus.CREATED) 
    public ResponseEntity<ApiResponse<UserDTO>>insertMember(@RequestBody UserDTO userDTO) {  // 반환 타입을 String으로 설정
        UserDTO insertUser=adminService.insertMember(userDTO);
        ApiResponse<UserDTO> response=new ApiResponse<UserDTO>(201, "회워가입 성공", insertUser);
        return ResponseEntity.status(HttpStatus.CREATED).body(response);
    }
}
