package com.dusk.dkb.config;

import java.util.UUID;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;

public class Csrf {
    private static final String CSRF_TOKEN_SESSION_KEY = "CSRF_TOKEN";

    //CSRF 토큰 생성
    public static String generateToken(HttpSession session){
        String csrfToken=UUID.randomUUID().toString();
        session.setAttribute(CSRF_TOKEN_SESSION_KEY, csrfToken);
        return csrfToken;
    }

    //CSRF 토큰 검증
    public static boolean validateToken(HttpServletRequest request, HttpSession session){
        //세션에서 토큰 가져오기
        String sessionToken=(String) session.getAttribute(CSRF_TOKEN_SESSION_KEY);
        //요청 헤더에서 토큰 가져오기
        String requestToken=request.getHeader("X-CSRF-TOKEN");
        //토큰이 일치하는지 비교
        return sessionToken != null && sessionToken.equals(requestToken);
    }

}
