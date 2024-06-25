package dev.lbrs.runnerz.run;


import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/runs") // useful to put at the controller level
public class RunController {


    private RunRepository runRepository;


//    THIS IS THE WRONG WAY TO DO IT
    /*
    here i am sayin thw run repository in this class  to
    create a new istance just use a new keyworkd like we are use to doing it in java
    and create a new instance of the run repository class..,
    AS WE KNOW SPRING IS AN INVERSION OF CONTROL FRAMEWORK
    whne create a new instance of classes an ALARM SHOULD GO OF
    'why create a new istance? SPRING has already an instance of this...'


    CONCEPT OF DEPENDENCY INJECTION!!! we are going to ask of an instance of that
    in the controller constructior foa a runRepository!!!!
     */
//    public RunController() {
//        this.runRepository = new RunRepository();
//    }


    public RunController(RunRepository runRepository) {
        this.runRepository = runRepository;
    }
//
    @GetMapping("/hello")
    String home(){
        return "Hello World!";
    }

//
    @GetMapping("")
    List<Run> findAll() {
        return runRepository.findAll();
    }


    // EXAMPLE OF DYNAMIC VARIABLE!!!
    @GetMapping("/{id}")
    Run findById(@PathVariable Integer id) {
        Optional<Run> run = runRepository.findById(id);
        if (run.isEmpty()) {
            throw  new RunNotFoundExxception();
        }
        return run.get();
    }

    //post
    @ResponseStatus(HttpStatus.CREATED) // this is a 201 response!
    @PostMapping("")
    void create(@Valid @RequestBody Run run) {// CHECK THE @Validate it validate the info of the run before the runRepository
        System.out.println(run);
        runRepository.create(run);
    }

    //put
    @ResponseStatus(HttpStatus.NO_CONTENT)
    @PutMapping("/{id}")
    void update(@Valid @RequestBody Run run, @PathVariable Integer id) {
        runRepository.update(run, id);

    }

    //delete
    @DeleteMapping("/{id}")
    void delete(@PathVariable Integer id) {
        runRepository.delete(id);
    }

}
