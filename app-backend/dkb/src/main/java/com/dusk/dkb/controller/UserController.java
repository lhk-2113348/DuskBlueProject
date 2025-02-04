package com.dusk.dkb.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dusk.dkb.dto.UserDTO;
import com.dusk.dkb.service.UserServiceImpl;

@RestController
@RequestMapping("/api/users")
public class UserController{
private final UserServiceImpl userService;

@Autowired
public UserController(UserServiceImpl userService){
    this.userService=userService;
}
    @PostMapping("/signup")
    public UserDTO register(@RequestBody UserDTO user) {
        return userService.registerMember(user);
    }
}