package com.dusk.dkb.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class MenuDTO {

    @NotBlank(message = "메뉴 이름을 입력해 주세요")
    private String name;           // 메뉴 이름

    @NotNull(message = "가격을 입력해 주세요")
    @Positive(message = "가격은 0보다 큰 값이어야 합니다")
    private Double price;          // 가격

    @NotBlank(message = "설명을 입력해 주세요")
    private String description;    // 메뉴 설명

    @NotBlank(message = "카테고리를 입력해 주세요")
    private String category;       // 카테고리

    @NotBlank(message = "Hot/Ice 여부를 입력해 주세요")
    private String hotOrIce;       // Hot/Ice 여부 (Hot 또는 Ice)

    @NotNull(message = "품절 여부를 입력해 주세요")
    private Boolean soldOut;       // Soldout 여부 (품절 여부)

    @NotBlank(message = "이미지를 입력해 주세요")
    private String image;          // 이미지 URL 또는 경로

    public MenuDTO() {}

    public MenuDTO(String name, Double price, String description, String category, String hotOrIce, Boolean soldOut, String image) {
        this.name = name;
        this.price = price;
        this.description = description;
        this.category = category;
        this.hotOrIce = hotOrIce;
        this.soldOut = soldOut;
        this.image = image;
    }
}
