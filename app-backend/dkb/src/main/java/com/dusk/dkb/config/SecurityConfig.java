package com.dusk.dkb.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;

@Configuration
@EnableWebSecurity

public class SecurityConfig   {
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
    //Http 보안 설정
      @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
  @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http.csrf().disable()  // CSRF 보호 비활성화 (API에서 사용할 때)
            .authorizeHttpRequests()  // 요청 인증 설정
                .requestMatchers("/api/auth/login", "/api/auth/signup").permitAll()  // 로그인, 회원가입은 인증 없이 접근 가능
                .anyRequest().authenticated()  // 그 외 모든 요청은 인증 필요
            .and()
            .httpBasic().disable();  // HTTP Basic 인증 비활성화

        return http.build();  // http.build()로 보안 필터 체인 반환
    }

}
