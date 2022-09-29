package lu.atozdigital.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import lu.atozdigital.api.models.User;

public interface UserRepository  extends JpaRepository<User, Long> {
	
	public User findByEmail(String email);
	public User findByEmailAndPassword(String email, String password);

}
