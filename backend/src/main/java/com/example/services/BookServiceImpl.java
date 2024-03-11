package com.example.services;

import com.example.entity.Book;
import com.example.entity.Genre;
import com.example.entity.Rack;
import com.example.repository.BookRepository;
import com.example.repository.GenreRepository;
import com.example.repository.RackRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookServiceImpl implements BookService{
    private BookRepository bookRepository;
    private GenreService genreService;
    private RackService rackService;
    private RackRepository rackRepository;

    @Autowired
    public BookServiceImpl(BookRepository bookRepository, GenreService genreService, RackService rackService, RackRepository rackRepository) {
        this.bookRepository = bookRepository;
        this.genreService = genreService;
        this.rackService = rackService;
        this.rackRepository = rackRepository;
    }

    @Override
    public List<Book> findAll(){
        return bookRepository.findAll();
    }

    @Override
    public List<Book> getRackBooks(int rackId){
        List<Book> list = bookRepository.findAll();
        list = list.stream().filter(book -> (book.getRack().getRackId()==rackId)).toList();
        return list;
    }

    @Override
    public List<Book> getGenreBooks(int genreId){
        List<Book> list = bookRepository.findAll();
        list = list.stream().filter(book -> (book.getGenre().getGenreId()==genreId)).toList();
        return list;
    }

    @Override
    public int addBooks(Book book, int genreId, int rackId){
        Genre x = genreService.find(genreId);
        Rack y = rackService.find(rackId);
        if(x==null || y==null)
            return -1;
        else
        {
            int z = y.getTotalBooks() + book.getCopiesCount();
            y.setTotalBooks(z);
            rackRepository.save(y);
            book.setGenre(x);
            book.setRack(y);
            bookRepository.save(book);
            return 0;
        }
    }
}
