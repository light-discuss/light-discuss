package com.lightdiscuss.server.business;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.test.context.ActiveProfiles;

/**
 * @author: kevin
 * @date: 2017/12/8
 * @description:
 */
@SpringBootApplication
@ComponentScan(basePackages = "com.lightdiscuss.server.business")
@EnableConfigurationProperties
@ActiveProfiles("derby")
public class BusinessApplication {
    public static void main(String[] args) {
        SpringApplication.run(BusinessApplication.class, args);
    }

}
