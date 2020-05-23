package com.example.codeclan.groupProject.models;


import org.springframework.data.annotation.Id;

import javax.swing.text.html.Option;
import java.util.ArrayList;
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
    private String imgUrl;
    private String description;
    private ArrayList<HashMap> options;
    private HashMap<String, String> option;
    private Stock stock;
    private boolean highlighted;

    public Item(boolean highlighted,String name, String brand, String type, int maxSellPrice, int buyPrice, String imgUrl, String description, Stock stock) {
        this.highlighted = highlighted;
        this.name = name;
        this.brand = brand;
        this.type = type;
        this.maxSellPrice = maxSellPrice;
        this.currentSellPrice = maxSellPrice -1;
        this.buyPrice = buyPrice;
        this.imgUrl = imgUrl;
        this.description = description;
        this.stock = stock;
        this.option = new HashMap<>();
        this.options = new ArrayList<>();
    }

    public Item() {
    }

    @Override
    public String toString() {
        return String.format(
                "Item[id=%s, highlighted='%s', name='%s', brand='%s', type='%s', maxSellPrice='%s', " +
                        "currentSellPrice='%s', buyPrice='%s', imgUrl='%s', description='%s', " +
                        "stock='%s', options='%s']",
                id, highlighted, name, brand, type, maxSellPrice, currentSellPrice,
                buyPrice, imgUrl, description, stock, options);
    }

    public ArrayList<HashMap> getOptions(){
        return options;
    }

    public void setOption(HashMap<String, String> option) {
        this.options.add(option);
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

    public String getImgUrl() {
        return imgUrl;
    }

    public void setImgUrl(String imgUrl) {
        this.imgUrl = imgUrl;
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

    public boolean getHighlighted() {
        return highlighted;
    }
}
