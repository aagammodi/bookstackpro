package com.example.restcontroller;

import com.example.entity.Book;
import com.example.entity.Genre;
import com.example.services.GenreService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class GenreController {

    GenreService genreService;

    @Autowired
    public GenreController(GenreService genreService) {
        this.genreService = genreService;
    }

    @GetMapping("/genres")
    List<Genre> getAllGenres(){
        return genreService.findAll();
    }

    @PostMapping("/genres")
    int addGenres(@RequestBody Genre genre){
        return genreService.addGenres(genre);
    }
}
