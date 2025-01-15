package com.dusk.dkb.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
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
    
    public UserDTO(String username, String password, String email, String question, String answer) {
    this.username = username;
    this.password = password;
    this.email = email;
    this.question = question;
    this.answer = answer;
}

}