package com.dusk.dkb.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@Entity
public class Menu {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)  // 자동 생성되는 ID
    private Long id;   // 메뉴 ID (primary key)

    @Column(nullable = false)
    private String name;           // 메뉴 이름

    @Column(nullable = false)
    private Double price;          // 가격

    @Column(nullable = false, length = 500)
    private String description;    // 메뉴 설명

    @Column(nullable = false)
    private String category;       // 카테고리

    @Column(nullable = false)
    private String hotOrIce;       // Hot/Ice 여부

    @Column(nullable = false)
    private Boolean soldOut;       // 품절 여부 (Boolean)

    @Column(nullable = false)
    private String image;          // 이미지 URL 또는 경로

    // 기본 생성자 (JPA는 기본 생성자가 필요)
    public Menu() {}

    // 모든 필드를 초기화하는 생성자
    public Menu(String name, Double price, String description, String category, String hotOrIce, Boolean soldOut, String image) {
        this.name = name;
        this.price = price;
        this.description = description;
        this.category = category;
        this.hotOrIce = hotOrIce;
        this.soldOut = soldOut;
        this.image = image;
    }
}
