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
import lu.atozdigital.api.services.ArticleService;

@RestController
public class ArticleController {
	
	@Autowired
	private ArticleService articleService;
	
	@CrossOrigin(origins = "http://localhost:4200")
	@PostMapping("/articles")
	public ResponseEntity<Article> createArticle(@RequestBody Article article){
		return new ResponseEntity<>(articleService.save(article), HttpStatus.CREATED);
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping("/articles")
	public ResponseEntity<List<Article>> getArticles(){
		return new ResponseEntity<>(articleService.findAll(), HttpStatus.OK);
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping("/{id}")
	public ResponseEntity<Article> getArticle(@PathVariable Long id){
		return new ResponseEntity<>(articleService.findById(id), HttpStatus.OK);
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@PutMapping("/edit/{id}")
	public ResponseEntity<Article> editArticle(@PathVariable Long id, @RequestBody Article article){
		Article articleFound = articleService.findById(id);
		
		if(articleFound ==null) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		try {
			articleFound.setName(article.getName());
			articleFound.setPrice(article.getPrice());
			articleFound.setPicture(article.getPicture());
			return new ResponseEntity<>(articleService.save(articleFound), HttpStatus.CREATED);
		} catch(DataAccessException e){
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
		
		
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<?> deleteArticle(@PathVariable long id){
		articleService.delete(id);
		return new ResponseEntity<>(HttpStatus.OK);  
	}
	
	
	

}
