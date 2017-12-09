package com.lightdiscuss.server.business;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

/**
 * @author: kevin
 * @date: 2017/12/8
 * @description:
 */
@SpringBootApplication
@Configuration
@ComponentScan(basePackages = "com.lightdiscuss.server.business")
@EnableJpaRepositories(basePackages = "com.lightdiscuss.server.business.repository")
@EnableConfigurationProperties
public class BusinessApplication {
    public static void main(String[] args) {
        SpringApplication.run(BusinessApplication.class, args);
    }

}
