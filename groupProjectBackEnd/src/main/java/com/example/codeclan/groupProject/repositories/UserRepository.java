package com.example.codeclan.groupProject.repositories;

import com.example.codeclan.groupProject.models.User;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface UserRepository extends MongoRepository<User, String> {

    public List<User> findByUserName(String userName);
    public User findByEmail(String email);

}
