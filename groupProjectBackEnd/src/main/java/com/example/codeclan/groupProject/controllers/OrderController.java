package com.example.codeclan.groupProject.controllers;

import com.example.codeclan.groupProject.models.Order;
import com.example.codeclan.groupProject.repositories.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin
@RestController
@RequestMapping(value = "/orders")
public class OrderController {

    @Autowired
    OrderRepository orderRepository;
//
    @GetMapping
    public ResponseEntity<List<Order>> getAllOrders(
            @RequestParam(name = "status", required = false) String status,
            @RequestParam(name = "date", required = false) String date,
            @RequestParam(name = "userId", required = false) String userId
    ) {
        if(status != null){
            return new ResponseEntity<>(orderRepository.findByStatus(status), HttpStatus.OK);
        }
        if(date != null){
            return new ResponseEntity<>(orderRepository.findByDate(date), HttpStatus.OK);
        }
        if(userId != null){
        return new ResponseEntity<>(orderRepository.findByUser(userId), HttpStatus.OK);
        }
        return new ResponseEntity<>(orderRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping("{id}")
    public ResponseEntity getOrder(@PathVariable String id){
        return new ResponseEntity<>(orderRepository.findById(id), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Order> postOrders(@RequestBody Order order){
        orderRepository.save(order);
        return new ResponseEntity<>(order, HttpStatus.CREATED);
    }

    @PatchMapping("{id}")
    public ResponseEntity<Order> putOrders(@RequestBody Order order, @PathVariable String id) {
        if (!orderRepository.findById(id).isPresent()){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        orderRepository.save(order);
        return new ResponseEntity<>(order, HttpStatus.CREATED);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<List<Order>> deleteOrders(@PathVariable String id){
        orderRepository.deleteById(id);
        return new ResponseEntity<>(orderRepository.findAll(), HttpStatus.OK);
    }
}
