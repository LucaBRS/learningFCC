package dev.lbrs.runnerz.run;

import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Positive;

import java.time.LocalDateTime;

public record Run(
        Integer id,

        @NotEmpty // this is from the spring validation
        String title,
        LocalDateTime startedOn,
        LocalDateTime completedOn,

        @Positive
        Integer miles,
        Location location
) {
    // important to validate using VALIDATION API, must be imported on the pom "spring-boot-starter-validation"

    public Run{
        if(!completedOn.isAfter(startedOn)) {
            throw new IllegalArgumentException("Started on isAfter startedOn");
        }
    }

}
