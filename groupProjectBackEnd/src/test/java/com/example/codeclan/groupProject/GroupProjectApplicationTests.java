package com.example.codeclan.groupProject;

import com.example.codeclan.groupProject.models.*;
import com.example.codeclan.groupProject.repositories.ItemRepository;
import com.example.codeclan.groupProject.repositories.OrderRepository;
import com.example.codeclan.groupProject.repositories.StockRepository;
import com.example.codeclan.groupProject.repositories.UserRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.HashMap;

import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest
class GroupProjectApplicationTests {

	User user;
	User user2;
	Address address;
	Item item;
	Item item2;
	Item item3;
	Item item4;
	Order orderBasket;
	Order newOrder;

	@Autowired
	UserRepository userRepository;

	@Autowired
	ItemRepository itemRepository;

	@Autowired
	StockRepository stockRepository;

	@Autowired
	OrderRepository orderRepository;

	@Test
	void contextLoads() {
	}

	@Test
	public void orderIsSaved(){
		userRepository.deleteAll();
		address = new Address("Mr", "User", "Name", "123 Fake Street",
				"Fake Building", "TownsVille", "Edinburgh", "EH01 0AB" );
		user = new User(false,"username","password", "email.com", address );

		user = userRepository.save(user);


		address = new Address("Mr", "User", "Name", "123 Fake Street",
				"Fake Building", "TownsVille", "Edinburgh", "EH01 0AB" );
		user2 = new User(false,"admin","admin", "@email.com", address );

		user2 = userRepository.save(user2);



		assertEquals(1, userRepository.findByUsername("username").size());
		assertEquals(1, userRepository.findByEmail("email.com").size());
//		assertEquals(user, userRepository.findByIdIs(user.getId()));

		stockRepository.deleteAll();
		itemRepository.deleteAll();
		Stock tempStock = new Stock();
		Stock tempStock2 = new Stock();
		Stock tempStock3 = new Stock();
		Stock tempStock4 = new Stock();

		tempStock = stockRepository.save(tempStock);
		tempStock2 = stockRepository.save(tempStock2);
		tempStock3 = stockRepository.save(tempStock3);
		tempStock4 = stockRepository.save(tempStock4);

		String description = "This is a description of an Item";
		item = new Item(false, "first item", "brand", "item",
				10, 5, "/images/007-1024x682.jpg", description, tempStock);
		item = itemRepository.save(item);

		item2 = new Item(true, "second item", "2brand", "item",
				10, 5, "/images/black-pull-1024x683.jpg", description, tempStock2);
		item2 = itemRepository.save(item2);

		item3 = new Item(false, "Campus T-shirt black", "Code Clan", "Clothing",
				8, 15, "/images/campus-t-shirt-black-1024x683.jpg", description, tempStock3);
		item3 = itemRepository.save(item3);

		item4 = new Item(true, "Grey Beanie", "Code Clan", "Clothing",
				10, 5, "/images/Grey-Beanie-1-1024x683.jpg", description, tempStock4);
		item4 = itemRepository.save(item4);

		tempStock.setTotalBought(1);
		tempStock2.setTotalBought(1);
		tempStock3.setTotalBought(0);
		tempStock4.setTotalBought(50);

		tempStock = stockRepository.save(tempStock);
		tempStock2 = stockRepository.save(tempStock2);
		tempStock3= stockRepository.save(tempStock3);
		tempStock4 = stockRepository.save(tempStock4);
		item = itemRepository.save(item);
		item2 = itemRepository.save(item2);
		item3 = itemRepository.save(item3);
		item4 = itemRepository.save(item4);

		HashMap<String, String> option1 = new HashMap<>();
		option1.put("Size","Large");

		item.setOption(option1);
		item = itemRepository.save(item);
		assertEquals(1, itemRepository.findByBrand("brand").size());
		assertEquals(2, itemRepository.findByHighlighted(false).size());

		orderRepository.deleteAll();
		orderBasket = new Order(user, "basket", "23/05/2020 12:00:00");
		orderBasket = orderRepository.save(orderBasket);

		orderBasket.addItem(item);
		orderBasket = orderRepository.save(orderBasket);
		orderBasket.addItem(item2);
		orderBasket = orderRepository.save(orderBasket);
		user.addOrder(orderBasket.getId());
		user = userRepository.save(user);

		User user2 = new User();
		userRepository.save(user2);

		System.out.println(user.getId());
		System.out.println(user2.getId());

		assertEquals(1, orderRepository.findByUserId(user.getId()).size());
		assertEquals(item.getId(), orderRepository.findByStatus("basket").get(0).getItems().get(0).getId());
		assertEquals(1, userRepository.findById(user.getId()).get().getOrders().size());
	}

}
