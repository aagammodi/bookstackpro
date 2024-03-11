package com.example.restcontroller;

import com.example.entity.Book;
import com.example.services.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class BookController {

    BookService bookService;

    @Autowired
    public BookController(BookService bookService) {
        this.bookService = bookService;
    }

    @GetMapping("/books")
    List<Book> getAllBooks(){
        return bookService.findAll();
    }

    @GetMapping("/racks/{rackId}")
    List<Book> getRackBooks(@PathVariable int rackId){
        return bookService.getRackBooks(rackId);
    }

    @GetMapping("/genres/{genreId}")
    List<Book> getGenreBooks(@PathVariable int genreId){
        return bookService.getGenreBooks(genreId);
    }

    @PostMapping("/books")
    int addBooks(@RequestBody Book book, @RequestParam int genreId, @RequestParam int rackId){
        return bookService.addBooks(book, genreId, rackId);
    }
}
