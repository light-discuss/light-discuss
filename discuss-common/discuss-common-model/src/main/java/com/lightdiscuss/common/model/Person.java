package com.lightdiscuss.common.model;

/**
 * @author: kevin
 * @date: 2017/12/7
 * @description:
 */
public class Person {

    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

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
