package com.lightdiscuss.server.business.repository;

import com.lightdiscuss.common.model.Person;
import org.springframework.data.repository.reactive.ReactiveCrudRepository;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

/**
 * @author: kevin
 * @date: 2017/12/7
 * @description:
 */
public interface PersonRepository extends ReactiveCrudRepository<Person,String> {

    Mono<Person> getPerson(int id);

    Flux<Person> allPeople();

    Mono<Void> savePerson(Mono<Person> person);
}
