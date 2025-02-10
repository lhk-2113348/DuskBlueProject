package com.dusk.dkb.service;

import java.util.List;

import com.dusk.dkb.dto.MenuDTO;

public interface MenuService {

    // 메뉴 등록
    boolean addMenu(MenuDTO menuDTO);

    // 메뉴 수정
    boolean updateMenu(Long id, MenuDTO menuDTO);

     // 메뉴 목록을 반환하는 메서드
    List<MenuDTO> getAllMenus();
}
