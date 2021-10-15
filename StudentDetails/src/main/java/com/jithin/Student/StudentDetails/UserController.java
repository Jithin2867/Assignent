package com.jithin.Student.StudentDetails;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class UserController {
	
	@Autowired
	private UserRepository ur;
	
	
	@GetMapping("/")
	public List<User>GetUsers(){
		return ur.findAll();
		
	}
	@GetMapping("/{id}")
	public User GetUsers(@PathVariable String id){
		return ur.findById(id).orElse(null);
		
	}
	@PostMapping("/")
	public User postMethodName(@RequestBody User user) {
		return ur.save(user);
	}
	@PostMapping("/{id}")
	public User PutMapping(@RequestBody User newUser ,@PathVariable String id) {
		User oldUser=ur.findById(id).orElse(null);
		oldUser.setName(newUser.getName());
		oldUser.setDOB(newUser.getDOB());
		oldUser.setStandard(newUser.getStandard());
		oldUser.setDivision(newUser.getDivision());
		oldUser.setGender(newUser.getGender());
		return oldUser;
		
		
	}
	@DeleteMapping
	public String DeleteUser(@PathVariable String id) {
		ur.deleteById(id);
		return id;
	}
}
