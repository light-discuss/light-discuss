package com.lightdiscuss.server.business.service;

import com.lightdiscuss.common.entity.Person;
import com.lightdiscuss.server.business.BusinessApplication;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import java.util.List;


/**
 * @author: kevin
 * @date: 2018/1/2
 * @description:
 */
@RunWith(SpringJUnit4ClassRunner.class)
@SpringBootTest(classes = BusinessApplication.class)
public class MysqlIntegrationTest {


    private static final Logger logger = LoggerFactory
            .getLogger(DerbyIntegrationTest.class);

    @Autowired
    PersonService personService;

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
}
