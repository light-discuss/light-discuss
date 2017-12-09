package com.lightdiscuss.server.business.config;

import com.lightdiscuss.common.model.Person;
import org.springframework.beans.factory.config.ConfigurableBeanFactory;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Scope;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.transaction.annotation.EnableTransactionManagement;

/**
 * @author: kevin
 * @date: 2017/12/8
 * @description:
 */
@Configuration
@ComponentScan(basePackages = "com.lightdiscuss.server.business")
@EnableTransactionManagement
@EnableJpaRepositories(basePackages = "com.lightdiscuss.server.business.repository")
public class TestConfig {

    @Bean
    @Scope(ConfigurableBeanFactory.SCOPE_PROTOTYPE)
    public Person employee() {
        return new Person();
    }
}
