package com.dusk.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dusk.demo.entity.Menu;
import com.dusk.demo.entity.User;
import com.dusk.demo.repository.MenuRepository;
import com.dusk.demo.repository.UserRepository;


@Service
public class MenuService {

    @Autowired
    private MenuRepository menuRepository;

    @Autowired
    private UserRepository userRepository;

    public Menu createMenu(Long userId, Menu menu) {
        // 사용자 정보 가져오기
        User user = userRepository.findById(userId).orElseThrow(() -> new RuntimeException("user not found"));

        // 사용자가 관리자가 아니면 예외 처리
        if (user.getRole() == null) {
            throw new RuntimeException("사용자에게 역할(Role)이 없습니다.");
        }

        if (!user.getRole().getName().equals("ADMIN")) {
            throw new RuntimeException("관리자만 메뉴 등록 가능합니다");
        }
        // 메뉴에 사용자 연결
        menu.setUser(user);  // setUser(user) 사용

        // 메뉴 저장
        return menuRepository.save(menu);
    }
}
