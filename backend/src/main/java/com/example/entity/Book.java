package com.example.entity;

import jakarta.persistence.*;

@Entity
@Table(name="Book")
public class Book {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int bookId;
    private String bookName;
    @ManyToOne
    @JoinColumn(name="rack_id")
    private Rack rack;
    @ManyToOne
    @JoinColumn(name="genre_id")
    private Genre genre;
    private String author;
    private int copiesCount;
    private String description;
    private String imageURL;

    public int getBookId() {
        return bookId;
    }

    public void setBookId(int bookId) {
        this.bookId = bookId;
    }

    public String getBookName() {
        return bookName;
    }

    public void setBookName(String bookName) {
        this.bookName = bookName;
    }

    public Rack getRack() {
        return rack;
    }

    public void setRack(Rack rack) {
        this.rack = rack;
    }

    public Genre getGenre() {
        return genre;
    }

    public void setGenre(Genre genre) {
        this.genre = genre;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public int getCopiesCount() {
        return copiesCount;
    }

    public void setCopiesCount(int copiesCount) {
        this.copiesCount = copiesCount;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getImageURL() {
        return imageURL;
    }

    public void setImageURL(String imageURL) {
        this.imageURL = imageURL;
    }

//    public Book(String bookName, Rack rack, Genre genre, String author, int copiesCount, String description, String imageURL) {
//        this.bookName = bookName;
//        this.rack = rack;
//        this.genre = genre;
//        this.author = author;
//        this.copiesCount = copiesCount;
//        this.description = description;
//        this.imageURL = imageURL;
//    }
}
