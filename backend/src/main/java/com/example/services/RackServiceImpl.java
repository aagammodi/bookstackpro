package com.example.services;

import com.example.entity.Genre;
import com.example.entity.Rack;
import com.example.repository.RackRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RackServiceImpl implements RackService{
    private RackRepository rackRepository;

    @Autowired
    public RackServiceImpl(RackRepository rackRepository) {
        this.rackRepository = rackRepository;
    }

    @Override
    public List<Rack> findAll(){
        return rackRepository.findAll();
    }

    @Override
    public Rack find(int rackId){
        Optional<Rack> x = rackRepository.findById(rackId);
        Rack y = null;
        if(x.isPresent())
            y = x.get();
        else
            return null;
        return y;
    }
}
