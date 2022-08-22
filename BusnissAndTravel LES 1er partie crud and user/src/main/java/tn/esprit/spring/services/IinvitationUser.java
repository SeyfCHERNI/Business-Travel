package tn.esprit.spring.services;
import java.util.List;

import tn.esprit.spring.entities.Invitation;
import tn.esprit.spring.entities.InvitationUser;

public interface IinvitationUser {
	InvitationUser AffecterInvitation(int idU);
	List<InvitationUser> allInvitationAffecter();

	List<Invitation> allEmployeAjouter();
	public String stat(String MetierEmploye) ;	
}
