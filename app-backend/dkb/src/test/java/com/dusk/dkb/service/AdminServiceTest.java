// package com.dusk.dkb.service;

// import static org.junit.jupiter.api.Assertions.assertEquals;
// import org.junit.jupiter.api.Test;
// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.boot.test.context.SpringBootTest;

// import com.dusk.dkb.dto.UserDTO;

// @SpringBootTest
// public class AdminServiceTest {
//     @Autowired
//     private AdminService adminService;

//     @Test
//     public void testInsertMember() {
//         // 예시 데이터
//         UserDTO userDTO = new UserDTO();
//         userDTO.setUsername("testUser");
//         userDTO.setPassword("password123");
//         userDTO.setEmail("test@example.com");
//         userDTO.setQuestion("What is your pet's name?");
//         userDTO.setAnswer("Fluffy");

//         int result = adminService.insertMember(userDTO);

//         assertEquals(1, result);
//     }
// }
