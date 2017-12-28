package com.lightdiscuss.server.business.config;

import com.lightdiscuss.server.business.support.DatabaseConfigProfile;
import org.hibernate.dialect.DerbyTenSevenDialect;
import org.hibernate.dialect.Dialect;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;
import org.springframework.context.annotation.PropertySource;
import org.springframework.core.env.Environment;
import org.springframework.core.io.ClassPathResource;
import org.springframework.jdbc.datasource.init.DatabasePopulator;
import org.springframework.jdbc.datasource.init.ResourceDatabasePopulator;

import javax.sql.DataSource;
import java.sql.SQLException;
import java.util.Properties;

import static java.lang.Boolean.FALSE;
import static java.lang.Boolean.TRUE;
import static org.hibernate.cfg.AvailableSettings.*;

/**
 * @author: kevin
 * @date: 2017/12/7
 * @description:
 */
@Profile(DatabaseConfigProfile.DERBY_EMBEDDED)
@Configuration
@PropertySource(value = "classpath:/META-INF/spring/derby-embedded.properties")
public class JpaDerbyEmbeddedConfig extends AbstractJpaCommonConfig {

    @Autowired
    Environment environment;

    @Value("${database.drop.url}")
    private String databaseDropUrl;

    @Bean
    public String derbyDropUrl(){
        return databaseDropUrl;
    }

    @Override
    protected Properties getJpaProperties() {
        Properties properties = new Properties();
        //properties.setProperty(HBM2DDL_AUTO, Hbm2ddlType.CREATE_DROP.toValue());
        //To get the value from properties file:
        properties.setProperty(HBM2DDL_AUTO, getHbm2ddl());
        properties.setProperty(GENERATE_STATISTICS, TRUE.toString());
        properties.setProperty(SHOW_SQL, TRUE.toString());
        properties.setProperty(FORMAT_SQL, TRUE.toString());
        properties.setProperty(USE_SQL_COMMENTS, TRUE.toString());
        properties.setProperty(CONNECTION_CHAR_SET, getHibernateCharSet());
        //properties.setProperty(NAMING_STRATEGY, ImprovedNamingStrategy.class.getName());
        properties.setProperty(VALIDATOR_APPLY_TO_DDL, FALSE.toString());
        properties.setProperty(VALIDATOR_AUTOREGISTER_LISTENERS, FALSE.toString());
        return properties;
    }

    @Override
    protected Class<? extends Dialect> getDatabaseDialect() {
        return DerbyTenSevenDialect.class;
    }

    @Bean
    public DatabasePopulator databasePopulator(@Qualifier("dataSource") DataSource dataSource) {
        ResourceDatabasePopulator populator = new ResourceDatabasePopulator();
        populator.setContinueOnError(true);
        populator.setIgnoreFailedDrops(true);
         populator.addScript(new ClassPathResource("/derby-sql/ddl/db-ddl.sql"));
         populator.addScript(new ClassPathResource("/derby-sql/dml/db-dml.sql"));
        try {
            populator.populate(dataSource.getConnection());
        } catch (SQLException ignored) {
        }
        return populator;
    }

}
