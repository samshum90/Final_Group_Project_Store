package com.example.codeclan.groupProject;

import com.example.codeclan.groupProject.models.Address;
import com.example.codeclan.groupProject.models.User;
import com.example.codeclan.groupProject.repositories.UserRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest
class GroupProjectApplicationTests {

	User user;
	Address address;

	@Autowired
	UserRepository userRepository;


	@Test
	void contextLoads() {
	}

	@Test
	public void userIsSaved(){
		userRepository.deleteAll();
		address = new Address("Mr", "User", "Name", "123 Fake Street",
				"Fake Building", "TownsVille", "Edinburgh", "EH01 0AB" );
		user = new User(false,"username","password", "email.com", address );

		user = userRepository.save(user);



		assertEquals(1, userRepository.findByUserName("username").size());
		assertEquals(1, userRepository.findByEmail("email.com").size());
		System.out.println((user.getAddress().getTitle()));
//		assertEquals(user, userRepository.findByIdIs(user.getId()));
	}



}
