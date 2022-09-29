package lu.atozdigital.api.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import lu.atozdigital.api.models.User;
import lu.atozdigital.api.services.EmailService;
import lu.atozdigital.api.services.UserService;

@RestController
public class UserController {
	
	@Autowired
	private UserService service;

	@Autowired
	    private EmailService emailService;
	
	@PostMapping("/registeruser")
	@CrossOrigin(origins = "http://localhost:4200")
	public User registerUser(@RequestBody User user) throws Exception {
		String tempEmailId=user.getEmail();
		if(tempEmailId!=null && !"".equals(tempEmailId)) {
			User userObj=service.fetchByEmail(tempEmailId);
			if(userObj!=null) {
				throw new Exception ("User with "+tempEmailId+" already exists");
			}
		}
		User userObj=null;
		userObj=service.saveUser(user);
		
		String tempName = user.getUsername();
		
         SimpleMailMessage mailMessage = new SimpleMailMessage();
         mailMessage.setTo(user.getEmail());
         mailMessage.setSubject("Complete Registration!");
         mailMessage.setFrom("no.reply.projetpfe@gmail.com");
         mailMessage.setText("Bonjour     "+tempName+"     , Votre compte a été crée avec succès !");

         emailService.sendEmail(mailMessage);

		
		return userObj;
	}
	
	@PostMapping("/login")
	@CrossOrigin(origins="http://localhost:4200")
	public User loginUser(@RequestBody User user) throws Exception {
		String tempEmailId=user.getEmail();
		String tempCode=user.getPassword();
		User userObj=null;
		if(tempEmailId!=null) {
		    userObj=service.fetchByEmailAndPassword(tempEmailId, tempCode);
		}
		if(userObj==null) {
			throw new Exception("Bad Credentials");
		}
		return userObj;
	}

}
