package tn.esprit.spring.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import tn.esprit.spring.entities.User;
import tn.esprit.spring.services.UserService;

@RestController
public class HomeController {
@Autowired
UserService userService;
@PostMapping("/registration")
public String createNewUser( @RequestBody User user) {
String msg="";
User userExists = userService.findUserByUserName(user.getUserName());
if (userExists != null) {
msg="There is already a user registered with the user name provided";
} else {
userService.saveUser(user);
msg="OK"; }
System.out.println("test"); 




return msg; }}
