package com.dusk.dkb.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;


@Configuration
public class CorsConfig implements WebMvcConfigurer{

    @Override
    public void addCorsMappings( CorsRegistry registry){
    if (registry != null) {
            registry.addMapping("/**")
                    .allowedOrigins("http://your-frontend-domain.com")
                    .allowedMethods("GET", "POST", "PUT", "DELETE")
                    .allowedHeaders("*")
                    .allowCredentials(true);
        }
    }
    
}
