package com.example.codeclan.groupProject.repositories;

import com.example.codeclan.groupProject.models.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends MongoRepository<User, String> {

    public List<User> findByUserName(String userName);
    public List<User> findByEmail(String email);

}
