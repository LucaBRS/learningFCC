package dev.lbrs.runnerz.run;


import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.NOT_FOUND)
public class RunNotFoundExxception extends RuntimeException {
    public RunNotFoundExxception() {
        super("Run not found");
    }
}
