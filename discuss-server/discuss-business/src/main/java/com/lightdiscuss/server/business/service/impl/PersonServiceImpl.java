package com.lightdiscuss.server.business.service.impl;

import com.lightdiscuss.common.entity.Person;
import com.lightdiscuss.server.business.repository.PersonRepository;
import com.lightdiscuss.server.business.service.PersonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * @author: kevin
 * @date: 2017/12/7
 * @description:
 */
@Service
@Transactional(rollbackFor = RuntimeException.class)
public class PersonServiceImpl implements PersonService {

    @Autowired
    private PersonRepository personRepository;

    @Override
    public List<Person> allPeople() {
        return (List<Person>) personRepository.findAll();
    }

    @Override
    public int savePerson(Person person) {
        personRepository.save(person);
        return 1;
    }

   /* @Autowired
    private  PersonRepository personRepository;

    @Override
    public Mono<Person> getPerson(int id){
        return personRepository.getPerson(id);
    }


    @Override
    public Flux<Person> allPeople(){
        return personRepository.allPeople();
    }

    @Override
    public Mono<Void> savePerson(Mono<Person> person){
        return personRepository.savePerson(person);
    }*/


}
