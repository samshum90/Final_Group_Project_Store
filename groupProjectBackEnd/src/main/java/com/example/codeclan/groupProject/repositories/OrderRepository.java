package com.example.codeclan.groupProject.repositories;


import com.example.codeclan.groupProject.models.Order;
import org.springframework.data.mongodb.repository.MongoRepository;


import java.util.List;

public interface OrderRepository extends MongoRepository<Order, String> {

    public List<Order> findByStatus(String status);
    public List<Order> findByDate(String date);
    public List<Order> findByUserId(String userId);

}
