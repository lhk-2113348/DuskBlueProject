package com.dusk.dkb.service;

import com.dusk.dkb.dto.MenuDTO;
import com.dusk.dkb.entity.Menu;
import com.dusk.dkb.dto.MenuRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class MenuServiceImpl implements MenuService {

    private final MenuRepository menuRepository;

    @Autowired
    public MenuServiceImpl(MenuRepository menuRepository) {
        this.menuRepository = menuRepository;
    }

    // 메뉴 등록
    @Override
    public boolean addMenu(MenuDTO menuDTO) {
        try {
            Menu menu = new Menu();
            menu.setMenuName(menuDTO.getName());
            menu.setMenuPrice(menuDTO.getPrice());
            menu.setMenuDescription(menuDTO.getDescription());
            menu.setMenuCategory(menuDTO.getCategory());
            menu.setMenuImage(menuDTO.getImage());
            menu.setSoldOut(menuDTO.getSoldOut());
            menu.setHotOrIce(menuDTO.getHotOrIce());

            menuRepository.save(menu);
            return true;
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }

    // 메뉴 수정
    @Override
    public boolean updateMenu(Long id, MenuDTO menuDTO) {
        try {
            Menu existingMenu = menuRepository.findById(id).orElse(null);
            if (existingMenu == null) {
                return false;
            }

            existingMenu.setMenuName(menuDTO.getName());
            existingMenu.setMenuPrice(menuDTO.getPrice());
            existingMenu.setMenuDescription(menuDTO.getDescription());
            existingMenu.setMenuCategory(menuDTO.getCategory());
            existingMenu.setMenuImage(menuDTO.getImage());
            existingMenu.setSoldOut(menuDTO.getSoldOut());
            existingMenu.setHotOrIce(menuDTO.getHotOrIce());

            menuRepository.save(existingMenu);
            return true;
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }

    // 메뉴 목록 가져오기
    @Override
    public List<MenuDTO> getAllMenus() {
        try {
            List<Menu> menus = menuRepository.findAll(); // 모든 메뉴 엔티티 조회
            return menus.stream()
                        .map(menu -> new MenuDTO(menu.getMenuName(), menu.getMenuPrice(), menu.getMenuDescription(),
                                                 menu.getMenuCategory(), menu.getHotOrIce(), menu.getSoldOut(),
                                                 menu.getMenuImage())) // Menu 엔티티를 MenuDTO로 변환
                        .collect(Collectors.toList());
        } catch (Exception e) {
            e.printStackTrace();
            return null; // 예외 발생 시 null 반환
        }
    }
}
