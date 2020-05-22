package com.example.codeclan.groupProject.models;

import org.springframework.data.annotation.Id;

public class Stock {

    @Id
    private String id;
    private int totalBought;

    private int totalSold;
    private int totalRefunded;
    private int totalLost;
    private int totalDamaged;

    private int profitMargin;

    public Stock() {
    }

    @Override
    public String toString() {
        return String.format(
                "Stock[id=%s, totalBought='%s', totalSold='%s', totalRefunded='%s', totalLost='%s', totalDamaged='%s', profitMargin='%s']",
                id, totalBought, totalSold, totalRefunded, totalLost, totalDamaged, profitMargin);
    }

    public int getTotalBought() {
        return totalBought;
    }

    public void setTotalBought(int totalBought) {
        this.totalBought = totalBought;
    }

    public int getTotalSold() {
        return totalSold;
    }

    public void setTotalSold(int totalSold) {
        this.totalSold = totalSold;
    }

    public int getTotalRefunded() {
        return totalRefunded;
    }

    public void setTotalRefunded(int totalRefunded) {
        this.totalRefunded = totalRefunded;
    }

    public int getTotalLost() {
        return totalLost;
    }

    public void setTotalLost(int totalLost) {
        this.totalLost = totalLost;
    }

    public int getTotalDamaged() {
        return totalDamaged;
    }

    public void setTotalDamaged(int totalDamaged) {
        this.totalDamaged = totalDamaged;
    }

    public int getProfitMargin() {
        return profitMargin;
    }

    public void setProfitMargin(int profitMargin) {
        this.profitMargin = profitMargin;
    }

    public String getId() {
        return id;
    }
}
