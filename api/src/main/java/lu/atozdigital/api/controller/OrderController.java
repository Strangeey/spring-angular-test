package lu.atozdigital.api.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import lu.atozdigital.api.models.Article;
import lu.atozdigital.api.models.Order;
import lu.atozdigital.api.repository.ArticleRepository;
import lu.atozdigital.api.repository.OrderRepository;
import lu.atozdigital.api.services.ArticleService;
import lu.atozdigital.api.services.OrderService;

@RestController
public class OrderController {
	
	@Autowired
	private ArticleRepository articleRepository;
	
	@Autowired
	private OrderRepository orderRepository;
	
	@Autowired
	private OrderService orderService;
	
	@Autowired
	private ArticleService articleService;
	
	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping("/orders")
	public ResponseEntity<List<Order>> getOrders(){
		return new ResponseEntity<>(orderService.findAll(), HttpStatus.OK);
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@PostMapping("/orders")
	public ResponseEntity<Order> createOrder(@RequestBody Order order){
		Order orderFound = orderService.findByReference(order.getReference());
		
		if (orderFound==null ) {
			return new ResponseEntity<>(orderService.save(order), HttpStatus.CREATED);
		}
		else {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
}
		

	
	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping("/order/{id}")
	public ResponseEntity<Order> getOrder(@PathVariable Long id){
		return new ResponseEntity<>(orderService.findById(id), HttpStatus.OK);
	}

	
	@CrossOrigin(origins = "http://localhost:4200")
	@PutMapping("/orders/{id}")
	public ResponseEntity<Order> editOrder(@PathVariable Long id, @RequestBody Order order){
		Order orderFound = orderService.findById(id);
		
		if(orderFound ==null) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		
		try {
	

			orderFound.setArticles(order.getArticles());
			return new ResponseEntity<>(orderService.save(orderFound), HttpStatus.CREATED);
		} catch(DataAccessException e){
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}	
	
	@CrossOrigin(origins="http://localhost:4200")
	@PutMapping("/orders/delete/{id}")
	public ResponseEntity<Order> deleteArticleFromOrder(@PathVariable Long id, @RequestBody Order order){
		Order orderFound = orderService.findById(id);
		
		if(orderFound ==null) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		
		try {
	

			orderFound.setArticles(null);
			return new ResponseEntity<>(orderService.save(orderFound), HttpStatus.CREATED);
		} catch(DataAccessException e){
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	
		
	}
	/*
	@DeleteMapping("/orders/{cp_fk}/articles")
	public ResponseEntity<List<Article>> getAllArticlesByOrder(@PathVariable(value="articleId") Long articleId){
		
		//Order orderAvailable = orderService.findBycpfk(cp_fk);
		
		if(!orderRepository.existsById(articleId)) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		articleRepository.deleteByarticleId(articleId);
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}
	*/

}
