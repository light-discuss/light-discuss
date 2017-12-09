package com.lightdiscuss.server.business.service;

import com.lightdiscuss.common.model.Person;
import com.lightdiscuss.server.business.BusinessApplication;
import org.junit.AfterClass;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import java.sql.DriverManager;
import java.util.List;

/**
 * @author: kevin
 * @date: 2017/12/8
 * @description:
 */
//@ContextConfiguration(classes= {JpaDerbyEmbeddedConfig.class, TestConfig.class})
@RunWith(SpringJUnit4ClassRunner.class)
@SpringBootTest(classes = BusinessApplication.class)
@ActiveProfiles("derby")
public class DerbyIntegrationTest {

    private static final Logger logger = LoggerFactory
            .getLogger(DerbyIntegrationTest.class);

    @Autowired
    PersonService personService;

    @Autowired
    @Qualifier("derbyDropUrl")
    private static String derbyDropUrl;

    @Test
    public void testMarkerMethod() {
        Person person = new Person();
        person.setAge(12);
        person.setId(1);
        person.setName("aa");

        personService.savePerson(person);
        logger.info("Person {} Saved", person.getId());

        List<Person> list = personService.allPeople();
        logger.info("people size ====={}",list.size());


    }

    @AfterClass
    public static void afterClass() {
        logger.info("Dropping DERBY EMBEDDED Database");
        try {
            DriverManager.getConnection(derbyDropUrl);
        } catch (Exception ignored) {
        }
    }


}
