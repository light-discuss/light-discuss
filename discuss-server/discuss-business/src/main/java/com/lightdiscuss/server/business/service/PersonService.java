package com.lightdiscuss.server.business.service;

import com.lightdiscuss.common.model.Person;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

/**
 * @author: kevin
 * @date: 2017/12/7
 * @description:
 */
public interface PersonService {


    Mono<Person> getPerson(int id);


    Flux<Person> allPeople();

    Mono<Void> savePerson(Mono<Person> person);


}
