package com.example.codeclan.groupProject;

import com.example.codeclan.groupProject.models.Address;
import com.example.codeclan.groupProject.models.Item;
import com.example.codeclan.groupProject.models.Stock;
import com.example.codeclan.groupProject.models.User;
import com.example.codeclan.groupProject.repositories.ItemRepository;
import com.example.codeclan.groupProject.repositories.UserRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest
class GroupProjectApplicationTests {

	User user;
	Address address;
	Item item;
	Item item2;
	@Autowired
	UserRepository userRepository;

	@Autowired
	ItemRepository itemRepository;


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
	@Test
	public void itemIsSaved(){
		itemRepository.deleteAll();
		Stock tempStock = new Stock();
		String description = "This is a description of an Item";
		item = new Item(false, "first item", "brand", "item", 10,
				5, "image.jpg", description, tempStock);
		item = itemRepository.save(item);

		item2 = new Item(false, "first item", "brand", "item", 10,
				5, "image.jpg", description, tempStock);
		item2 = itemRepository.save(item2);

		assertEquals(2, itemRepository.findByBrand("brand").size());
		assertEquals(2, itemRepository.findByHighlighted(false).size());
		System.out.println(item);
		System.out.println(item2);
	}



}
