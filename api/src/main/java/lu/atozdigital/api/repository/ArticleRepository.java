package lu.atozdigital.api.repository;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;

import lu.atozdigital.api.models.Article;

public interface ArticleRepository extends JpaRepository<Article, Long> {

	//List<Article> findByArticleId(Long articleId);
	
	void findById(long id);
	Article findByName(String name);
	
	
	@Transactional
	void deleteById(Long id);

}
