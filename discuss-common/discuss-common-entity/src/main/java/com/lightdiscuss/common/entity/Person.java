package com.lightdiscuss.common.entity;


import javax.persistence.*;

/**
 * @author: kevin
 * @date: 2017/12/7
 * @description:
 */
@Entity
@Table(name = "T_PERSON")
public class Person {
    public Person() {

    }

    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    @Id
    @Column(name = "id")
    private int id;

    private String name;

    private int age;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }
}
