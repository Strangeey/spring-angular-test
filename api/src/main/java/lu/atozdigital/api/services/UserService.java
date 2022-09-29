package lu.atozdigital.api.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import lu.atozdigital.api.models.User;
import lu.atozdigital.api.repository.UserRepository;

@Service
public class UserService {
	
	@Autowired
	private UserRepository repo;
		
	
	public User saveUser(User user) {
	  return repo.save(user);
	}
	
	public User fetchByEmail(String email) {
		return repo.findByEmail(email);
	}
	
	public User fetchByEmailAndPassword(String email, String password) {
		return repo.findByEmailAndPassword(email, password);
	}

}
