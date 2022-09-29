package lu.atozdigital.api.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import lu.atozdigital.api.models.Article;
import lu.atozdigital.api.models.Order;
import lu.atozdigital.api.repository.OrderRepository;

@Service
public class OrderService {
	
	@Autowired
	private OrderRepository orderRepository;
	
	public Order save(Order order) {
		return orderRepository.save(order);
	}
	
	public List<Order> findAll(){
		return orderRepository.findAll();
	}
	
	public Order findById(Long id) {
		return orderRepository.findById(id).orElse(null);
	}
	
	public void delete(long id) {
		orderRepository.deleteById(id);
	}
	
	public Order findByReference(String reference) {
		return orderRepository.findByReference(reference);
	}
	


}
