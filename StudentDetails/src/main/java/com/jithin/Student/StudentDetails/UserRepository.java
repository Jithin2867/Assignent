package com.jithin.Student.StudentDetails;


import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
@EnableAutoConfiguration
public interface UserRepository extends MongoRepository<User,String> {
	
	
}
