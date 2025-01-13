package com.dusk.dkb.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "users")  // 테이블 이름 설정
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)  // SEQUENCE로 변경 (필요 시 IDENTITY로도 가능)
    private Long id;  // 사용자 ID

    @Column(nullable = false, unique = true)  // 사용자명은 필수, 유니크
    private String username;

    @Column(nullable = false)  // 비밀번호는 필수
    private String password;
    
    @Column(nullable = false)  // 이메일은 필수
    private String email;

    @Column(nullable = false)  // 질문은 필수
    private String question;

    @Column(nullable = false)  // 답변은 필수
    private String answer;

    @Enumerated(EnumType.STRING)  // Enum을 STRING으로 저장
    @Column(nullable = false)  // 역할은 필수
    private Role role;
}
