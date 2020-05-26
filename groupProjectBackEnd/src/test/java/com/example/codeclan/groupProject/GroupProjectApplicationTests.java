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
	Item item5;
	Item item7;
	Item item8;
	Item item9;
	Item item10;
	Item item11;
	Item item12;
	Item item13;
	Item item14;
	Item item15;
	Item item16;
	Item item17;
	Order orderBasket;
	Order newOrder;
	ImgUrl imgUrl;
	ImgUrl imgUrl2;
	ImgUrl imgUrl3;
	ImgUrl imgUrl4;
	ImgUrl imgUrl5;
	ImgUrl imgUrl7;
	ImgUrl imgUrl8;
	ImgUrl imgUrl9;
	ImgUrl imgUrl10;
	ImgUrl imgUrl11;
	ImgUrl imgUrl12;
	ImgUrl imgUrl13;
	ImgUrl imgUrl14;
	ImgUrl imgUrl15;
	ImgUrl imgUrl16;
	ImgUrl imgUrl17;

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
		String description2 = "Black";
		String description3 = "Navy";

		imgUrl = new ImgUrl( "/images/black-zip-hoodie_1.jpg", null, null);

		item = new Item(false, "Zip Hoodie", "Code Clan", "Clothing",
				31, 35, imgUrl, description2, tempStock);
		item = itemRepository.save(item);

		imgUrl2 = new ImgUrl( "/images/campus-t-shirt-black-1.jpg", "/images/campus-t-shirt-black-2.jpg", null);

		item2 = new Item(true, "Campus T-Shirt", "Code Clan", "Clothing",
				19, 20, imgUrl2, description2, tempStock2);
		item2 = itemRepository.save(item2);

		imgUrl3 = new ImgUrl( "/images/Grey-Beanie-1.jpg", null, null);

		item3 = new Item(false, "Grey Beanie", "Code Clan", "Clothing",
				16, 20, imgUrl3, description, tempStock3);
		item3 = itemRepository.save(item3);

		imgUrl4 = new ImgUrl( "/images/Grey-Beanie-1.jpg", null, null);

		item4 = new Item(true, "Grey Beanie", "Code Clan", "Clothing",
				16, 20, imgUrl4, description, tempStock4);
		item4 = itemRepository.save(item4);

		imgUrl5 = new ImgUrl( "/images/black-pull-hoodie_1.jpg", null, null);

		item5 = new Item(false, "Pull-Over Hoodie", "Code Clan", "Clothing",
				31, 35, imgUrl5, description2, tempStock4);
		item5 = itemRepository.save(item5);

		imgUrl7 = new ImgUrl( "/images/navy-hoodie-pull-1.jpg", "/images/navy-hoodie-pull-2.jpg", null);

		item7 = new Item(false, "Pull-Over Hoodie", "Code Clan", "Clothing",
				31, 35, imgUrl7, description3, tempStock4);
		item7 = itemRepository.save(item7);

		imgUrl8 = new ImgUrl( "/images/navy-hoodie-pull-1.jpg", "/images/navy-hoodie-pull-2.jpg", null);

		item8 = new Item(false, "Zip Hoodie", "Code Clan", "Clothing",
				31, 35, imgUrl8, description3, tempStock2);
		item8 = itemRepository.save(item8);

		imgUrl9 = new ImgUrl( "/images/navy-marl-beanie-1024x684.jpg", null, null);

		item9 = new Item(false, "Marl Beanie", "Code Clan", "Clothing",
				14, 20, imgUrl9, description2, tempStock4);
		item9 = itemRepository.save(item9);

		imgUrl10 = new ImgUrl( "/images/navy-pattern-beanie-1.jpg", "/images/navy-pattern-beanie-2.jpg", null);

		item10 = new Item(false, "Navy Pattern Beanie", "Code Clan", "Clothing",
				16, 20, imgUrl10, description3, tempStock3);
		item10 = itemRepository.save(item10);

		imgUrl11 = new ImgUrl( "/images/powerbank-1.jpg", "/images/powerbank-2.jpg", null);

		item11 = new Item(false, "Powerbank", "Code Clan", "Electronics",
				16, 20, imgUrl11, description, tempStock4);
		item11 = itemRepository.save(item11);

		imgUrl12 = new ImgUrl( "/images/notebook-1.jpg", null, null);

		item12 = new Item(false, "Eco Notebook", "Code Clan", "Stationary",
				5, 8, imgUrl12, description, tempStock4);
		item12 = itemRepository.save(item12);

		imgUrl13 = new ImgUrl( "/images/t-shirt-black-1.jpg", "/images/t-shirt-black-2.jpg", null);

		item13 = new Item(false, "T Shirt", "Code Clan", "Clothing",
				16, 20, imgUrl13, description2, tempStock4);
		item13 = itemRepository.save(item13);

		imgUrl14 = new ImgUrl( "/images/t-shirt-navy-1.jpg", "/images/t-shirt-navy-2.jpg", null);

		item14 = new Item(false, "T Shirt", "Code Clan", "Clothing",
				16, 20, imgUrl14, description3, tempStock4);
		item14 = itemRepository.save(item14);

		imgUrl15 = new ImgUrl( "/images/umbrella-1.jpg", "/images/umbrella-2.jpg", null);

		item15 = new Item(false, "Umbrella", "Code Clan", "Other",
				21, 25, imgUrl15, description3, tempStock3);
		item15 = itemRepository.save(item15);

		imgUrl16 = new ImgUrl( "/images/umbrella-non-telescopic-1.jpg", "/images/umbrella-non-telescopic-2.jpg", null);

		item16 = new Item(false, "Umbrella Non-Telescopic", "Code Clan", "Other",
				21, 25, imgUrl16, description3, tempStock4);
		item16 = itemRepository.save(item16);

		imgUrl17 = new ImgUrl( "/images/water-bottle-1.jpg", "/images/water-bottle-2.jpg", null);

		item17 = new Item(false, "Water Bottle", "Code Clan", "Other",
				13, 15, imgUrl17, description2, tempStock4);
		item17 = itemRepository.save(item17);

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
		item5 = itemRepository.save(item5);
		item7 = itemRepository.save(item7);
		item8 = itemRepository.save(item8);
		item9 = itemRepository.save(item9);
		item10 = itemRepository.save(item11);
		item12 = itemRepository.save(item13);
		item14 = itemRepository.save(item14);
		item15 = itemRepository.save(item15);
		item16 = itemRepository.save(item16);
		item17 = itemRepository.save(item17);

		HashMap<String, String> option1 = new HashMap<>();
		option1.put("Size","Large");

		item.setOption(option1);
		item = itemRepository.save(item);
		assertEquals(16, itemRepository.findByBrand("Code Clan").size());
		assertEquals(14, itemRepository.findByHighlighted(false).size());

		orderRepository.deleteAll();
		orderBasket = new Order(user.getId(), "basket", "23/05/2020 12:00:00");
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
		String testId = user.getId();

		assertEquals(1, orderRepository.findByUser(testId).size());
		assertEquals(item.getId(), orderRepository.findByStatus("basket").get(0).getItems().get(0).getId());
		assertEquals(1, userRepository.findById(user.getId()).get().getOrders().size());
	}

}
