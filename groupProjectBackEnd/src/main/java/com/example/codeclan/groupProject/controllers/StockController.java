package com.example.codeclan.groupProject.controllers;

import com.example.codeclan.groupProject.models.Stock;
import com.example.codeclan.groupProject.repositories.StockRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin
@RestController
@RequestMapping(value = "/stocks")
public class StockController {

    @Autowired
    StockRepository stockRepository;

    @GetMapping
    public ResponseEntity<List<Stock>> getAllStocks(){

        return new ResponseEntity<>(stockRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping("{id}")
    public ResponseEntity getStock(@PathVariable String id){
        return new ResponseEntity<>(stockRepository.findById(id), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Stock> postStocks(@RequestBody Stock stock){
        stockRepository.save(stock);
        return new ResponseEntity<>(stock, HttpStatus.CREATED);
    }

    @PatchMapping("{id}")
    public ResponseEntity<Stock> putStocks(@RequestBody Stock stock, @PathVariable String id) {
        if (!stockRepository.findById(id).isPresent()){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        stockRepository.save(stock);
        return new ResponseEntity<>(stock, HttpStatus.CREATED);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<List<Stock>> deleteUsers(@PathVariable String id){
        stockRepository.deleteById(id);
        return new ResponseEntity<>(stockRepository.findAll(), HttpStatus.OK);
    }
}