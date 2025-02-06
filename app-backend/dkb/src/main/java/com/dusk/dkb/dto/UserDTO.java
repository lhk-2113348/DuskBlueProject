package com.dusk.dkb.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;


public class UserDTO{
     @NotBlank(message = "아이디를 입력해 주세요")
    private String username;

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getQuestion() {
        return question;
    }

    public void setQuestion(String question) {
        this.question = question;
    }

    public String getAnswer() {
        return answer;
    }

    public void setAnswer(String answer) {
        this.answer = answer;
    }

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