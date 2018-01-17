package com.lightdiscuss.server.business.config;

import com.lightdiscuss.server.business.support.DatabaseConfigProfile;
import org.hibernate.dialect.Dialect;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;
import org.springframework.context.annotation.PropertySource;

/**
 * @author: kevin
 * @date: 2017/12/28
 * @description:
 */
@Profile(DatabaseConfigProfile.MYSQL)
@Configuration
@PropertySource(value = "classpath:/META-INF/spring/mysql.properties")
public class JpaMysqlConfig extends AbstractJpaCommonConfig {

    @Override
    protected Class<? extends Dialect> getDatabaseDialect() {
        return org.hibernate.dialect.MySQL5InnoDBDialect.class;
    }
}
