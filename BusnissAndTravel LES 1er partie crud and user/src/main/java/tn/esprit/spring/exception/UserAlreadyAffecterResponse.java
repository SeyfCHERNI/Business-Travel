package tn.esprit.spring.exception;

public class UserAlreadyAffecterResponse {

    private String user ;

    public UserAlreadyAffecterResponse(String user) {
        this.user = user;
    }

	public String getUser() {
		return user;
	}

	public void setUser(String user) {
		this.user = user;
	}


}
