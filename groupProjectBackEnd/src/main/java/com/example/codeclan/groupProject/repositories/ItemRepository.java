package com.example.codeclan.groupProject.repositories;


import com.example.codeclan.groupProject.models.Item;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface ItemRepository extends MongoRepository<Item, String> {

    public List<Item> findByBrand(String brand);
    public List<Item> findByHighlighted(boolean highlighted);

//        this.highlighted = highlighted;
//        this.name = name;
//        this.brand = brand;
//        this.type = type;
//        this.salePrice = salePrice;
}
