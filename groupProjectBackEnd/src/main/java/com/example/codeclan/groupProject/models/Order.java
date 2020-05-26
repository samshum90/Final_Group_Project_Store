package com.example.codeclan.groupProject.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import org.springframework.data.annotation.Id;

import java.util.ArrayList;

public class Order {

    @Id
    private String id;

    private String user;

    private ArrayList<Item> items;

    private String status;

    private String date;

    public Order(String user, String status, String date) {
        this.user = user;
        this.items = new ArrayList<>();
        this.status = status;
        this.date = date;
    }

    public void addItem(Item newItem){
        this.items.add(newItem);
    }

    public void removeItem(Item removedItem){
        this.items.remove(removedItem);
    }

    public Order() {
    }

    public String getUser() {
        return user;
    }

    public ArrayList<Item> getItems() {
        return items;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getId() {
        return id;
    }

    @Override
    public String toString() {
        return String.format(
                "Order[id=%s, user='%s', items='%s', status='%s', date='%s']",
                id, user, items, status, date);
    }
}
