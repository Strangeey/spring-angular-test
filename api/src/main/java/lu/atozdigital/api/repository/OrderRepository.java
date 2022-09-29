package lu.atozdigital.api.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import lu.atozdigital.api.models.Order;
import lu.atozdigital.api.models.*;

public interface OrderRepository extends JpaRepository<Order, Long> {

	Order findByReference(String reference);



}
