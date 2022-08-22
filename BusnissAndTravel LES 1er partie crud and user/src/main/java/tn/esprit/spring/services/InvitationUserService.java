package tn.esprit.spring.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Value;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import tn.esprit.spring.Repository.InvitationRepository;
import tn.esprit.spring.Repository.InvitationUserRep;
import tn.esprit.spring.Repository.UserRepository;
import tn.esprit.spring.entities.Invitation;
import tn.esprit.spring.entities.InvitationUser;
import tn.esprit.spring.entities.User;
@Service

public class InvitationUserService implements IinvitationUser  {
	@Autowired
	InvitationUserRep invitationUserRep ;
	
	@Autowired
	UserRepository userRepository ;
	
	@Autowired
	private JavaMailSender javaMailSender;

	@Autowired 
	InvitationService invv;
	@Autowired
	InvitationRepository inr;


	@Value("spring.mail.username")
	private String from;

	@Value("spring.mail.password")
	private String password;
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	public String stat(String MetierEmploye) {
		
		List<Invitation> lm = invv.retrieveAllInvitations();
		
		float i = 0 ;
		for (Invitation invitation : lm) {
			
			if (invitation.getMetier_employe().toUpperCase().equals(MetierEmploye.toUpperCase()))
				
				i=i+1;
		}
		float percent = (i/lm.size())*100;
		
		return "Pourcentage de cette Metier: "+MetierEmploye+" est égale a : "+percent;		
		

	}


	@Override
	public List<Invitation> allEmployeAjouter() {
		// TODO Auto-generated method stub
		return  (List<Invitation>) inr.findAll();
	}


	@Override
	public InvitationUser AffecterInvitation(int idU) {
		
		User u = userRepository.findById(idU).orElse(null);
		InvitationUser iU = new InvitationUser();
		iU.setUsers(u);
		
	    SimpleMailMessage message = new SimpleMailMessage();
		message.setFrom("wiem.ifaoui@esprit.tn");
		message.setTo(u.getEmail());
		message.setSubject("Nouvelle Invitation");
		message.setText("Vous Avez reçoi une nouvelle invitation");
		
		
		javaMailSender.send(message);

		
		
		
		return invitationUserRep.save(iU);
	}


	@Override
	public List<InvitationUser> allInvitationAffecter() {
		// TODO Auto-generated method stub
		return invitationUserRep.findAll();
	}



}
