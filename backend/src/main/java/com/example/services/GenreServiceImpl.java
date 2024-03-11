package com.example.services;

import com.example.entity.Genre;
import com.example.repository.GenreRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class GenreServiceImpl implements GenreService{
    private GenreRepository genreRepository;

    @Autowired
    public GenreServiceImpl(GenreRepository genreRepository) {
        this.genreRepository = genreRepository;
    }

    @Override
    public List<Genre> findAll(){
        return genreRepository.findAll();
    }

    @Override
    public Genre find(int genreId){
        Optional<Genre> x = genreRepository.findById(genreId);
        Genre y = null;
        if(x.isPresent())
            y = x.get();
        else
            return null;
        return y;
    }

    @Override
    public int addGenres(Genre genre){
        genreRepository.save(genre);
        return 0;
    }
}
