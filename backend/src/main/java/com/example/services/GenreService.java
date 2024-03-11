package com.example.services;

import com.example.entity.Genre;

import java.util.List;

public interface GenreService {
    public List<Genre> findAll();
    public Genre find(int genreId);

    public int addGenres(Genre genre);
}
