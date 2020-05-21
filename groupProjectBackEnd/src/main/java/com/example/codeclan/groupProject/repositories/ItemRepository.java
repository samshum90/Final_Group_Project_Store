package com.example.codeclan.groupProject.repositories;


import com.example.codeclan.groupProject.models.Item;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface ItemRepository extends MongoRepository<Item, String> {

    public List<Item> findByBrand(String brand);
}
