package com.dusk.dkb.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserDTO{
     @NotBlank(message = "아이디를 입력해 주세요")
    private String username;

    @NotBlank(message = "비밀번호를 입력해 주세요")
    private String password;

    @NotBlank(message = "이메일을 입력해 주세요")
    @Email(message = "유효한 이메일을 적어주세요")
    private String email;

    private String question;
    private String answer;
}