package tn.esprit.spring.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import tn.esprit.spring.entities.Invitation;
import tn.esprit.spring.services.InvitationUserService;
@RestController
public class InvitationUserController {
	@Autowired
	InvitationUserService in;

	@GetMapping("/stat/{MetierEmploye}")
	@ResponseBody
	public String stat(@PathVariable("MetierEmploye") String MetierEmploye) {
		return in.stat(MetierEmploye);
		
		
}
	
	@ResponseBody
	@PostMapping("/addd/{idu}")

	public void AffecterInvitation(@PathVariable("idu") int idu )
	{
	 in.AffecterInvitation(idu);
	}

	
}