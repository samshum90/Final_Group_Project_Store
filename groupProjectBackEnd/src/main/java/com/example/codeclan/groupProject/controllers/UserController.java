package com.example.codeclan.groupProject.controllers;

import com.example.codeclan.groupProject.models.User;
import com.example.codeclan.groupProject.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class UserController {

    @Autowired
    UserRepository userRepository;

    @GetMapping
    public ResponseEntity<List<User>> getAllUsers(
            @RequestParam(name = "userName", required = false) String userName,
            @RequestParam(name = "email", required = false) String email
    ){
        if (userName != null){
            return new ResponseEntity<>(userRepository.findByUsername(userName), HttpStatus.OK);
        }
        return new ResponseEntity<>(userRepository.findAll(), HttpStatus.OK);
    }
}
