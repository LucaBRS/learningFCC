package dev.lbrs.runnerz.run;

import jakarta.annotation.PostConstruct;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;

import java.time.temporal.ChronoUnit;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Repository
public class RunRepository {

    private List<Run> runs = new ArrayList<>();

    public List<Run> findAll() {
        return runs;
    }

    Optional<Run> findById(Integer id) {
        return runs.stream()
                .filter(run -> run.id() == id)
                .findFirst()
                ;
    }

    void create(Run run) {
        runs.add(run);
    }

    void update(Run run, Integer id) {
        Optional<Run> existRun = findById(id);
        existRun.ifPresent(value -> runs.set(runs.indexOf(value), run));
    }

    void delete(Integer id) { runs.removeIf(run -> run.id().equals(id)); }

    // executed after dependency injection, TO PERFORM ANY INITIALIZATION!!
    @PostConstruct
    private void init() {
        runs.add(new Run(1,
                "morning monday",
                LocalDateTime.now(),
                LocalDateTime.now().plus(30, ChronoUnit.MINUTES),
                3,
                Location.INDOOR
        ));

        runs.add(new Run(2,
                "ddddd monday",
                LocalDateTime.now(),
                LocalDateTime.now().plus(600, ChronoUnit.MINUTES),
                3,
                Location.INDOOR
        ));
    }


}
