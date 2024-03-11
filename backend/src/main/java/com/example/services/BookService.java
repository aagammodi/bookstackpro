package com.example.services;

import com.example.entity.Book;

import java.util.List;

public interface BookService {
    public List<Book> findAll();
    List<Book> getRackBooks(int rackId);
    List<Book> getGenreBooks(int genreId);

    int addBooks(Book book, int genreId, int rackId);
}
