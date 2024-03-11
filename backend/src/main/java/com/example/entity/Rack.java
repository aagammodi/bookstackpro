package com.example.entity;

import jakarta.persistence.*;

@Entity
@Table(name="Rack")
public class Rack {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int rackId;
    private int totalBooks;

    public int getTotalBooks() {
        return totalBooks;
    }

    public void setTotalBooks(int totalBooks) {
        this.totalBooks = totalBooks;
    }

    public int getRackId() {
        return rackId;
    }

    public void setRackId(int rackId) {
        this.rackId = rackId;
    }

//    public Rack(int totalBooks) {
//        this.totalBooks = totalBooks;
//    }
}
