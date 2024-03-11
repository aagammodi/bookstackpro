package com.example.restcontroller;

import com.example.entity.Rack;
import com.example.services.RackService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api")
public class RackController {
    RackService rackService;

    @Autowired
    public RackController(RackService rackService) {
        this.rackService = rackService;
    }

    @GetMapping("/racks")
    List<Rack> getAllRacks(){
        return rackService.findAll();
    }
}
