package com.example.codeclan.groupProject.controllers;

import com.example.codeclan.groupProject.models.User;
import com.example.codeclan.groupProject.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin( maxAge = 3600)
@RestController
@RequestMapping(value = "/users")
public class UserController {

    @Autowired
    UserRepository userRepository;

    @CrossOrigin( maxAge = 3600)
    @GetMapping
    public ResponseEntity<List<User>> getAllUsers(
            @RequestParam(name = "userName", required = false) String userName,
            @RequestParam(name = "email", required = false) String email
    ){
        if (userName != null){
            return new ResponseEntity<>(userRepository.findByUserName(userName), HttpStatus.OK);
        }
        if(email != null){
            return new ResponseEntity<>(userRepository.findByEmail(email), HttpStatus.OK);
        }
        return new ResponseEntity<>(userRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping("{id}")
    public ResponseEntity getUser(@PathVariable String id){
        return new ResponseEntity<>(userRepository.findByIdIs(id), HttpStatus.OK);
    }
}
