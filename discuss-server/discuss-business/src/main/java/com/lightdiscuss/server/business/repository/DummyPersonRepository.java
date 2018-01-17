package com.lightdiscuss.server.business.repository;

import com.lightdiscuss.common.entity.Person;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import java.util.HashMap;
import java.util.Map;

/**
 * @author: kevin
 * @date: 2017/12/7
 * @description:
 */
public class DummyPersonRepository{

    private final Map<Integer, Person> people = new HashMap<>();

    public DummyPersonRepository() {
        this.people.put(1, new Person("zuodiao", 20));
        this.people.put(2, new Person("kevin", 18));
    }

    public Mono<Person> getPerson(int id) {
        return Mono.justOrEmpty(this.people.get(id));
    }

    public Flux<Person> allPeople() {
        return Flux.fromIterable(this.people.values());
    }

    public Mono<Void> savePerson(Mono<Person> personMono) {
        return personMono.doOnNext(person -> {
            int id = people.size() + 1;
            this.people.put(id, person);
            System.out.println(String.format("Saved %s with id %d%n", person, id));
        }).thenEmpty(Mono.empty());
    }
}
