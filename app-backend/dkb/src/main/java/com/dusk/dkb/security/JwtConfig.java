package com.dusk.dkb.config;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

@Component 
@ConfigurationProperties(prefix = "jwt")

public class JwtConfig {

    private String SECRET_KEY;
    public String getSecretKey() {
        return SECRET_KEY;
    }

    public void setSecretKey(String secretKey) {
        this.SECRET_KEY = secretKey;
    }
}
