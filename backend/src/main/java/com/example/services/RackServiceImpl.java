package com.example.services;

import com.example.entity.Rack;
import com.example.repository.RackRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
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
}
