package com.dusk.dkb.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dusk.dkb.dto.UserDTO;
import com.dusk.dkb.dto.UserRepository;
import com.dusk.dkb.entity.Role;
import com.dusk.dkb.entity.UserEntity;

@Service
public class UserServiceImpl {

    private final UserRepository userRepository;

    @Autowired
    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public UserDTO registerMember(UserDTO userDTO) {
        UserEntity userEntity = new UserEntity();
        userEntity.setUsername(userDTO.getUsername());
        userEntity.setPassword(userDTO.getPassword());
        userEntity.setEmail(userDTO.getEmail());
        userEntity.setQuestion(userDTO.getQuestion());
        userEntity.setAnswer(userDTO.getAnswer());
        userEntity.setRole(Role.USER);  // 기본적으로 USER 역할을 설정

        UserEntity savedUser = userRepository.save(userEntity);

        UserDTO savedUserDTO = new UserDTO(savedUser.getUsername(), savedUser.getPassword(), savedUser.getEmail(), savedUser.getQuestion(), savedUser.getAnswer());
        return savedUserDTO;
    }
}
