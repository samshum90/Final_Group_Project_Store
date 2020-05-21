package com.example.codeclan.groupProject.models;


import org.springframework.data.annotation.Id;

import java.util.HashMap;

public class Item {

    @Id
    private String id;

    private String name;
    private String brand;
    private String type;
    private int salePrice;
    private int buyPrice;
    private String imageUrl;
    private String description;
    private HashMap<String, String> option;
    private Stock stock;

    public Item(String name, String brand, String type, int salePrice, int buyPrice, String imageUrl, String description, Stock stock) {
        this.name = name;
        this.brand = brand;
        this.type = type;
        this.salePrice = salePrice;
        this.buyPrice = buyPrice;
        this.imageUrl = imageUrl;
        this.description = description;
        this.stock = stock;
        this.option = new HashMap<>();
    }

    public Item() {
    }

    @Override
    public String toString() {
        return String.format(
                "Item[id=%s, name='%s', brand='%s', type='%s', salePrice='%s', buyPrice='%s', imageUrl='%s', description='%s', stock='%s', option='%s']",
                id, name, brand, type, salePrice, buyPrice, imageUrl, description, stock, option);
    }

    public HashMap<String, String> getOption() {
        return option;
    }

    public void setOption(HashMap<String, String> option) {
        this.option = option;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public int getSalePrice() {
        return salePrice;
    }

    public void setSalePrice(int salePrice) {
        this.salePrice = salePrice;
    }

    public int getBuyPrice() {
        return buyPrice;
    }

    public void setBuyPrice(int buyPrice) {
        this.buyPrice = buyPrice;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Stock getStock() {
        return stock;
    }

    public void setStock(Stock stock) {
        this.stock = stock;
    }
}