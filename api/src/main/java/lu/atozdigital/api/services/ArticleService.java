package lu.atozdigital.api.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import lu.atozdigital.api.models.Article;
import lu.atozdigital.api.repository.ArticleRepository;

@Service
public class ArticleService {

	
	@Autowired
	private ArticleRepository articleRepository;
	
	public Article save(Article article) {
		return articleRepository.save(article);
	}
	
	public Article findById(Long id) {
		return articleRepository.findById(id).orElse(null);
	}
	
	public Article findByName(String name) {
		return articleRepository.findByName(name);
	}
	
	
	public List<Article> findAll(){
		return articleRepository.findAll();
	}
	
	public void delete(long id) {
		articleRepository.deleteById(id);
	}
	
	
	
}
