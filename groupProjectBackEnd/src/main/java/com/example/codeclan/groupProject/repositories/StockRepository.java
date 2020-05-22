package com.example.codeclan.groupProject.repositories;

import com.example.codeclan.groupProject.models.Stock;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface StockRepository extends MongoRepository<Stock, String> {


}
