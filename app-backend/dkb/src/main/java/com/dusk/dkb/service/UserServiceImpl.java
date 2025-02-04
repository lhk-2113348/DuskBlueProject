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
        // DTO를 엔티티로 변환
        UserEntity userEntity = new UserEntity();
        userEntity.setUsername(userDTO.getUsername());
        userEntity.setPassword(userDTO.getPassword());
        userEntity.setEmail(userDTO.getEmail());
        userEntity.setQuestion(userDTO.getQuestion());
        userEntity.setAnswer(userDTO.getAnswer());
        userEntity.setRole(Role.USER);  // 기본적으로 USER 역할을 설정

        // 엔티티 저장
        UserEntity savedUser = userRepository.save(userEntity);

        // 저장된 엔티티를 DTO로 변환하여 반환
        UserDTO savedUserDTO = new UserDTO(savedUser.getUsername(), savedUser.getPassword(), savedUser.getEmail(), savedUser.getQuestion(), savedUser.getAnswer());
        return savedUserDTO;
    }
}
