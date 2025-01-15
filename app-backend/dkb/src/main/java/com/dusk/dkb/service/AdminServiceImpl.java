package com.dusk.dkb.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dusk.dkb.dto.UserDTO;
import com.dusk.dkb.dto.UserRepository;
import com.dusk.dkb.entity.UserEntity;
import com.dusk.dkb.util.JwtTokenUtil;

@Service
public class AdminServiceImpl implements AdminService {

     @Autowired
    private JwtTokenUtil jwtTokenUtil; 
    @Autowired
    private UserRepository userRepository;

    @Override
    public String login(UserDTO userDTO) {
        UserEntity user = userRepository.findByUsername(userDTO.getUsername());
        if (user != null && user.getPassword().equals(userDTO.getPassword())) {
            return jwtTokenUtil.generateJwtToken(user);
        }
        return null;  // 로그인 실패
    }

    @Override
    public UserDTO insertMember(UserDTO userDTO) {
        UserEntity user = new UserEntity(userDTO.getUsername(), userDTO.getPassword(), userDTO.getEmail(), userDTO.getQuestion(), userDTO.getAnswer());

        UserEntity savedUser = userRepository.save(user);

        UserDTO savedUserDTO = new UserDTO(savedUser.getUsername(), savedUser.getPassword(), savedUser.getEmail(), savedUser.getQuestion(), savedUser.getAnswer());

        return savedUserDTO; 
    }
}
