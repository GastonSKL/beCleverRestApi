package com.example.demo.Models;

import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "employee")
public class EmployeeModel {
    
    @Id
    @Column(name = "id")
    private int id;

    @Column(name = "name")
    private String name;

    @Column(name = "last_name")
    private String lastName;

    @Column(name = "sex")
    private boolean sex;

    @Column(name = "state")
    private boolean state;

    @Column(name = "date")
    private LocalDate date;

    @Column(name = "location")
    private String location;

    public EmployeeModel() {
    }

    public EmployeeModel(String name, String lastName,String location, boolean sex, boolean state, LocalDate date) {
        this.name = name;
        this.lastName = lastName;
        this.location = location;
        this.sex = sex;
        this.state = state;
        this.date = date;
    }

    
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

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public boolean isSex() {
        return sex;
    }

    public void setSex(boolean sex) {
        this.sex = sex;
    }

    public boolean isState() {
        return state;
    }

    public void setState(boolean state) {
        this.state = state;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    @Override
    public String toString() {
        return "EmployeeModel [id=" + id + ", name=" + name + ", lastName=" + lastName + ", sex=" + sex + ", state="
                + state + ", date=" + date + "]";
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    

}
