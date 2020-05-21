package com.example.codeclan.groupProject.models;

import org.springframework.data.annotation.Id;

import java.util.ArrayList;

public class User {

    @Id
    private String id;
    private Boolean admin;
    private String userName;
    private String password;
    private String email;
    private Address address;
    private ArrayList<Order> orders;

    public User() {
    }

    public User(Boolean admin, String userName, String password, String email, Address address) {
        this.admin = admin;
        this.userName = userName;
        this.password = password;
        this.email = email;
        this.address = address;
        this.orders = new ArrayList<>();
    }

    @Override
    public String toString() {
        return String.format(
                "Stock[id=%s, admin='%s', userName='%s', email='%s', address='%s', orders='%s']",
                id, admin, userName, password, email, address, orders);
    }

    public Boolean getAdmin() {
        return admin;
    }

    public void setAdmin(Boolean admin) {
        this.admin = admin;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Address getAddress() {
        return address;
    }

    public void setAddress(Address address) {
        this.address = address;
    }

    public ArrayList<Order> getOrders() {
        return orders;
    }
}
