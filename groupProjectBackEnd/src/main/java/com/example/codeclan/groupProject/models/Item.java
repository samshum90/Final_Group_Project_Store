package com.example.codeclan.groupProject.models;


import org.springframework.data.annotation.Id;

import java.util.HashMap;

public class Item {

    @Id
    private String id;

    private String name;
    private String brand;
    private String type;
    private int maxSellPrice;
    private int currentSellPrice;
    private int buyPrice;
    private String imageUrl;
    private String description;
    private HashMap<String, String> option;
    private Stock stock;
    private boolean highlighted;

    public Item(boolean highlighted,String name, String brand, String type, int maxSellPrice, int buyPrice, String imageUrl, String description, Stock stock) {
        this.highlighted = highlighted;
        this.name = name;
        this.brand = brand;
        this.type = type;
        this.maxSellPrice = maxSellPrice;
        this.currentSellPrice = maxSellPrice -1;
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
                "Item[id=%s, highlighted='%s',name='%s', brand='%s', type='%s', maxSellPrice='%s', " +
                        "currentSellPrice='%s', buyPrice='%s', imageUrl='%s', description='%s', " +
                        "stock='%s', option='%s']",
                id, highlighted, name, brand, type, maxSellPrice, currentSellPrice,
                buyPrice, imageUrl, description, stock, option);
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

    public int getMaxSellPrice() {
        return maxSellPrice;
    }

    public int getCurrentSellPrice() {
        return currentSellPrice;
    }

    public void setCurrentSellPrice(int currentSellPrice) {
        this.currentSellPrice = currentSellPrice;
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

    public String getId() {
        return id;
    }
}
