package com.dusk.dkb.util;

import java.security.Key;
import java.util.Date;

import javax.crypto.spec.SecretKeySpec;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.dusk.dkb.config.JwtConfig;
import com.dusk.dkb.entity.UserEntity;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

@Component
public class JwtTokenUtil {

    @Autowired
    private JwtConfig jwtConfig; // JwtConfig를 사용하여 secretKey를 주입받음

    public String generateJwtToken(UserEntity user) {
        // SecretKey 생성 (String을 Key 객체로 변환)
        Key key = new SecretKeySpec(jwtConfig.getSecretKey().getBytes(), SignatureAlgorithm.HS256.getJcaName());

        return Jwts.builder()
                .setSubject(user.getUsername()) // 사용자 이름
                .setIssuedAt(new Date()) // 발급일
                .setExpiration(new Date(System.currentTimeMillis() + 1000 * 60 * 60)) // 1시간 후 만료
                .signWith(key) // 서명
                .compact();
    }
}
