package com.dusk.demo.service;


import com.dusk.demo.dto.UserDTO;
import com.dusk.demo.entity.User; 
import com.dusk.demo.entity.Role;  
import com.dusk.demo.dto.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class UserService {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    public User registerUser(UserDTO userDTO){
        if(userRepository.existsByUsername(userDTO.getUsername())){
            throw new IllegalArgumentException("아이디가 이미 존재합니다");
        }
        User user = new User();
        user.setUsername(userDTO.getUsername());
        user.setPassword(passwordEncoder.encode(userDTO.getPassword()));  // 비밀번호 암호화
        user.setEmail(userDTO.getEmail());
        user.setQuestion(userDTO.getQuestion());
        user.setAnswer(userDTO.getAnswer());
        user.setRole(Role.USER);

        System.out.println("사용자 저장 전: " + user);

         return userRepository.save(user);
    }
}