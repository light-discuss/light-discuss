package com.lightdiscuss.common.entity;

public class Bar {

    private String id;

    private String name;


    @Override
    public String toString() {
        return "bar";
    }


    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
