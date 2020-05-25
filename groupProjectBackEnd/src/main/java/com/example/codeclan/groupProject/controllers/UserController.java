package com.example.codeclan.groupProject.controllers;

import com.example.codeclan.groupProject.models.User;
import com.example.codeclan.groupProject.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.persistence.Entity;
import java.util.HashMap;
import java.util.List;
@Entity
@CrossOrigin
@RestController
@RequestMapping(value = "/users")
public class UserController {

    @Autowired
    UserRepository userRepository;

    @GetMapping
    public ResponseEntity<List<User>> getAllUsers(
            @RequestParam(name = "username", required = false) String username,
            @RequestParam(name = "email", required = false) String email
    ){
        if (username != null){
            return new ResponseEntity<>(userRepository.findByUsername(username), HttpStatus.OK);
        }
        if(email != null){
            return new ResponseEntity<>(userRepository.findByEmail(email), HttpStatus.OK);
        }
        return new ResponseEntity<>(userRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping("{id}")
    public ResponseEntity getUser(@PathVariable String id){
        return new ResponseEntity<>(userRepository.findById(id), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity postUsers(@RequestBody User user){
        if(userRepository.findByUsername(user.getUsername()).size() >0 ){
            HashMap<String , String> userExists = new HashMap<>();
            userExists.put("user name already used", user.getUsername());
            return new ResponseEntity<>(userExists, HttpStatus.BAD_REQUEST);
        }else if(userRepository.findByEmail(user.getEmail()).size() > 0 ){
            HashMap<String , String> emailExists = new HashMap<>();
            emailExists.put("email already used", user.getEmail());
            return new ResponseEntity<>(emailExists, HttpStatus.BAD_REQUEST);
        }

        userRepository.save(user);
        return new ResponseEntity<>(user, HttpStatus.CREATED);
    }

    @PutMapping("{id}")
    public ResponseEntity<User> putUsers(@RequestBody User user, @PathVariable String id) {
        if (!userRepository.findById(id).isPresent()){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        userRepository.save(user);
        return new ResponseEntity<>(user, HttpStatus.CREATED);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<List<User>> deleteUsers(@PathVariable String id){
        userRepository.deleteById(id);
        return new ResponseEntity<>(userRepository.findAll(), HttpStatus.OK);
    }
}
