package com.lightdiscuss.server.api;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/**
 * @author: kevin
 * @date: 2017/12/6
 * @description:
 */
@SpringBootApplication
@EnableAutoConfiguration
public class Application{

    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }
}
