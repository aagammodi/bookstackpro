package com.example.entity;

import jakarta.persistence.*;

@Entity
@Table(name="Genre")
public class Genre {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int genreId;
    private String genreName;
    private String description;
    private String imageURL;

    public int getGenreId() {
        return genreId;
    }

    public void setGenreId(int genreId) {
        this.genreId = genreId;
    }

    public String getGenreName() {
        return genreName;
    }

    public void setGenreName(String genreName) {
        this.genreName = genreName;
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

//    public Genre(String genreName, String description, String imageURL) {
//        this.genreName = genreName;
//        this.description = description;
//        this.imageURL = imageURL;
//    }
}
