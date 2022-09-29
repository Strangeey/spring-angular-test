package lu.atozdigital.api.models;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name="Orders")
public class Order {
	
	@Id
	@GeneratedValue
	private long id;
	
	private String reference;
	private String date;
	
	@OneToMany(targetEntity = Article.class,cascade	= CascadeType.ALL, fetch = FetchType.LAZY)
	@JoinColumn(name="articleId", referencedColumnName="id")
	private List<Article> articles;
	
	public void addArticle(Article article) {
		articles.add(article);
	}
	
	public void removeArticle(Article article) {
		articles.remove(article);
	}
	
	
	public Order() {
		
	}

	public Order(long id, String reference, String date, List<Article> articles) {
		super();
		this.id = id;
		this.reference = reference;
		this.date = date;
		this.articles = articles;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getReference() {
		return reference;
	}

	public void setReference(String reference) {
		this.reference = reference;
	}

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}

	public List<Article> getArticles() {
		return articles;
	}

	public void setArticles(List<Article> articles) {
		this.articles = articles;
	}

	
	
	
}
