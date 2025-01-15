package com.dusk.dkb.service;

import com.dusk.dkb.dto.UserDTO;

import jakarta.transaction.Transactional;

public interface AdminService {
    
    @Transactional
    String login(UserDTO userDTO); //로그인
    @Transactional
    UserDTO insertMember(UserDTO userDTO); //회원가입
    
}
