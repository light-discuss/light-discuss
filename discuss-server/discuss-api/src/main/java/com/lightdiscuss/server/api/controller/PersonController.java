package com.lightdiscuss.server.api.controller;

import com.lightdiscuss.common.model.Bar;
import com.lightdiscuss.common.model.Person;
import com.lightdiscuss.server.business.service.PersonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@RestController
public class PersonController {

    @Autowired
    private PersonService personService;


    @GetMapping("/bar")
    String bar() {
        return new Bar().toString();
    }

    @GetMapping("/home")
    Mono<String> home() {
        return Mono.just("home");
    }

    @GetMapping("/all")
    public Flux<Person> allPeople() {

        return personService.allPeople();

    }

    @GetMapping("get/{id}")
    public Mono<Person> getPerson(@PathVariable int id) {
        return personService.getPerson(id);
    }


    @PostMapping("save")
    public Mono<Void> savePerson(@RequestBody Mono<Person> personMono) {
        return personService.savePerson(personMono);
    }

}
