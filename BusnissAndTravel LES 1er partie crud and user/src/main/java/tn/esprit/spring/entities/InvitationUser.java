package tn.esprit.spring.entities;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.experimental.FieldDefaults;


@Entity
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class InvitationUser {

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idaffecter ;
    @ManyToOne
    @JoinColumn(name="id_user",referencedColumnName = "idU")
    private User  users;
    
    

    
    
    
}
