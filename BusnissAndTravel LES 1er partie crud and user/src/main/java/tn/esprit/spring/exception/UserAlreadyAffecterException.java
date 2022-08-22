package tn.esprit.spring.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@SuppressWarnings("serial")
@ResponseStatus ( HttpStatus.BAD_REQUEST)
public class UserAlreadyAffecterException extends RuntimeException{

    public UserAlreadyAffecterException(String message) {
        super(message);
    }
}
