package com.lightdiscuss.server.business.repository;

import com.lightdiscuss.common.entity.Person;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

/**
 * @author: kevin
 * @date: 2017/12/7
 * @description:
 */
@Repository
public interface PersonRepository extends CrudRepository<Person, String> {

   /* Mono<Person> getPerson(int id);

    Flux<Person> allPeople();

    Mono<Void> savePerson(Mono<Person> person);*/

}
