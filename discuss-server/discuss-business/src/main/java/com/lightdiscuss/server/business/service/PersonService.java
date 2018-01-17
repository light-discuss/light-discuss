package com.lightdiscuss.server.business.service;

import com.lightdiscuss.common.entity.Person;

import java.util.List;

/**
 * @author: kevin
 * @date: 2017/12/7
 * @description:
 */
public interface PersonService {


   /* Mono<Person> getPerson(int id);


    Flux<Person> allPeople();

    Mono<Void> savePerson(Mono<Person> person);*/

    List<Person> allPeople();

    int savePerson(Person person);


}
