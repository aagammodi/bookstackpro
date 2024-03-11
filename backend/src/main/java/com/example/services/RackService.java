package com.example.services;

import com.example.entity.Book;
import com.example.entity.Genre;
import com.example.entity.Rack;

import java.util.List;

public interface RackService {
    public List<Rack> findAll();
    public Rack find(int rackId);

    public int addRacks();
}
