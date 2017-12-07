package com.lightdiscuss.server.business.service.impl;

import com.lightdiscuss.common.model.Person;
import com.lightdiscuss.server.business.repository.PersonRepository;
import com.lightdiscuss.server.business.service.PersonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

/**
 * @author: kevin
 * @date: 2017/12/7
 * @description:
 */
@Service
public class PersonServiceImpl implements PersonService {

    @Autowired
    private  PersonRepository personRepository;

    public Mono<Person> getPerson(int id){
        return personRepository.getPerson(id);
    }


    public Flux<Person> allPeople(){
        return personRepository.allPeople();
    }

    public Mono<Void> savePerson(Mono<Person> person){
        return personRepository.savePerson(person);
    }


}
