package com.dusk.dkb.security;

import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.bcrypt.BCrypt;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;

@Configuration
public class SecurityConfig {
    public static String hashPassword(String plainPassword){
        return BCrypt.hashpw(plainPassword,BCrypt.gensalt());
    }//비밀번호 해싱
    public static boolean verifyPassword(String plainPassword,String hashedPassword){
        return BCrypt.checkpw(plainPassword, hashedPassword);
    }// 입력한 비밀번호가 저장된 해시와 일치하는지 검증

    //세션 생성 및 보안 설정
    public static void createSecureSession(HttpServletRequest request, jakarta.servlet.http.HttpServletResponse response,Object user){
        HttpSession session=request.getSession(true);
        session.setAttribute("user",user);
        session.setMaxInactiveInterval(30*60); //세션 만료 시간
    }
    //로그아웃
    public static void invalidateSession(HttpServletRequest request){
        HttpSession session = request.getSession(false);
        if(session != null){
            session.invalidate();//세션 무효화
        }
    }
}
