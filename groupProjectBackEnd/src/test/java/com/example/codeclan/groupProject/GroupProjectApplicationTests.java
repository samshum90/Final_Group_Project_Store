package com.example.codeclan.groupProject;

import com.example.codeclan.groupProject.models.*;
import com.example.codeclan.groupProject.repositories.ItemRepository;
import com.example.codeclan.groupProject.repositories.OrderRepository;
import com.example.codeclan.groupProject.repositories.StockRepository;
import com.example.codeclan.groupProject.repositories.UserRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.ArrayList;
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
	Item item6;
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
		String description2 = "Black";
		String description3 = "Navy";

//		imgUrlString ="/images/black-zip-hoodie_1.jpg";
		ArrayList<String> UrlList = new ArrayList<>();
		UrlList.add( "/images/black-zip-hoodie_1.jpg");
		item = new Item(false, "Zip Hoodie", "Code Clan", "Clothing",
				31, 35, UrlList, description2, tempStock);
		item = itemRepository.save(item);

		ArrayList<String> UrlList2 = new ArrayList<>();

		UrlList2.add("/images/campus-t-shirt-black-1.jpg");
		UrlList2.add("/images/campus-t-shirt-black-2.jpg");

		item2 = new Item(true, "Campus T-Shirt", "Code Clan", "Clothing",
				19, 20, UrlList2, description2, tempStock2);
		item2 = itemRepository.save(item2);

		ArrayList<String> UrlList3= new ArrayList<>();
		UrlList3.add("/images/Grey-Beanie-1.jpg" );

		item3 = new Item(false, "Grey Beanie", "Code Clan", "Clothing",
				16, 20, UrlList3, description, tempStock3);
		item3 = itemRepository.save(item3);

		ArrayList<String> UrlList4 = new ArrayList<>();
		UrlList4.add("/images/Grey-Beanie-1.jpg");

		item4 = new Item(true, "Grey Beanie", "Code Clan", "Clothing",
				16, 20, UrlList4, description, tempStock4);
		item4 = itemRepository.save(item4);

		ArrayList<String> UrlList5 = new ArrayList<>();
		UrlList5.add("/images/black-pull-hoodie_1.jpg");

		item5 = new Item(false, "Pull-Over Hoodie", "Code Clan", "Clothing",
				31, 35, UrlList5, description2, tempStock4);
		item5 = itemRepository.save(item5);

		ArrayList<String> UrlList6 = new ArrayList<>();

		UrlList6.add("/images/navy-hoodie-pull-1.jpg");
		UrlList6.add("/images/navy-hoodie-pull-2.jpg");


		item6 = new Item(false, "Pull-Over Hoodie", "Code Clan", "Clothing",
				31, 35, UrlList6, description3, tempStock4);
		item6 = itemRepository.save(item6);

		ArrayList<String> UrlList7 = new ArrayList<>();

		UrlList7.add("/images/navy-hoodie-pull-1.jpg");
		UrlList7.add("navy-hoodie-pull-2.jpg");

		item7 = new Item(false, "Zip Hoodie", "Code Clan", "Clothing",
				31, 35, UrlList7, description3, tempStock2);
		item7 = itemRepository.save(item7);

<<<<<<< HEAD
		imgUrl8 = new ImgUrl( "/images/navy-hoodie-pull-1.jpg", "/images/navy-hoodie-pull-2.jpg", null);
=======
		ArrayList<String> UrlList8 = new ArrayList<>();
>>>>>>> 812f1308c6b546f15a3f288bbc4f614707b6ce24

		UrlList8.add("/images/navy-marl-beanie-1024x684.jpg");

		item8 = new Item(false, "Marl Beanie", "Code Clan", "Clothing",
				14, 20, UrlList8, description2, tempStock4);
		item8 = itemRepository.save(item8);

		ArrayList<String> UrlList9 = new ArrayList<>();

		UrlList9.add("/images/navy-pattern-beanie-1.jpg");
		UrlList9.add("/images/navy-pattern-beanie-2.jpg");

		item9 = new Item(false, "Navy Pattern Beanie", "Code Clan", "Clothing",
				16, 20, UrlList9, description3, tempStock3);
		item9 = itemRepository.save(item9);

		ArrayList<String> UrlList10 = new ArrayList<>();

		UrlList10.add("/images/powerbank-1.jpg");
		UrlList10.add("/images/powerbank-2.jpg");

		item10 = new Item(false, "Powerbank", "Code Clan", "Electronics",
				16, 20, UrlList10, description, tempStock4);
		item10 = itemRepository.save(item10);

		ArrayList<String> UrlList11 = new ArrayList<>();
		UrlList11.add("/images/notebook-1.jpg");

		item11 = new Item(false, "Eco Notebook", "Code Clan", "Stationary",
				5, 8, UrlList11, description, tempStock4);
		item11 = itemRepository.save(item11);

		ArrayList<String> UrlList12 = new ArrayList<>();

		UrlList12.add("/images/t-shirt-black-1.jpg");
		UrlList12.add("/images/t-shirt-black-2.jpg");

		item12 = new Item(false, "T Shirt", "Code Clan", "Clothing",
				16, 20, UrlList12, description2, tempStock4);
		item12 = itemRepository.save(item12);

		ArrayList<String> UrlList13 = new ArrayList<>();

		UrlList13.add("/images/t-shirt-navy-1.jpg");
		UrlList13.add("/images/t-shirt-navy-2.jpg");

		item13 = new Item(false, "T Shirt", "Code Clan", "Clothing",
				16, 20, UrlList13, description3, tempStock4);
		item13 = itemRepository.save(item13);

		ArrayList<String> UrlList14 = new ArrayList<>();

		UrlList14.add("/images/umbrella-1.jpg");
		UrlList14.add("/images/umbrella-2.jpg");

		item14 = new Item(false, "Umbrella", "Code Clan", "Other",
				21, 25, UrlList14, description3, tempStock3);
		item14 = itemRepository.save(item14);

		ArrayList<String> UrlList15 = new ArrayList<>();

		UrlList15.add("/images/umbrella-non-telescopic-1.jpg");
		UrlList15.add("/images/umbrella-non-telescopic-2.jpg");

		item15 = new Item(false, "Umbrella Non-Telescopic", "Code Clan", "Other",
				21, 25, UrlList, description3, tempStock4);
		item15 = itemRepository.save(item15);

		ArrayList<String> UrlList16 = new ArrayList<>();
		UrlList16.add("/images/water-bottle-1.jpg");
		UrlList16.add("/images/water-bottle-2.jpg");

		item16 = new Item(false, "Water Bottle", "Code Clan", "Other",
				13, 15, UrlList16, description2, tempStock4);
		item16 = itemRepository.save(item16);

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


		System.out.println("nine"+ item9);
		item9 = itemRepository.save(item9);
		System.out.println("nine after save"+item9);


		System.out.println(item10);
		item10 = itemRepository.save(item10);
		System.out.println(item10);
		item11 = itemRepository.save(item11);
		item12 = itemRepository.save(item12);
		item13 = itemRepository.save(item13);
		item14 = itemRepository.save(item14);
		item15 = itemRepository.save(item15);
		item16 = itemRepository.save(item16);

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
