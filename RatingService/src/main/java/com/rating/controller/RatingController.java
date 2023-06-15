package com.rating.controller;

import org.aspectj.lang.reflect.NoSuchAdviceException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.rating.model.Rating;
import com.rating.service.RatingService;

import java.util.List;

@RestController
@RequestMapping("/ratingservice")
public class RatingController {
    private final RatingService ratingService;

    @Autowired
    public RatingController(RatingService ratingService) {
        this.ratingService = ratingService;
    }

    @PostMapping("/create")
    public Rating saveRating(@RequestBody Rating rating) {
        return ratingService.saveRating(rating);
    }

    @GetMapping("/getall")
    public List<Rating> getAllRatings() {
        return ratingService.getAllRatings();
    }

    @GetMapping("/get/{id}")
    public Rating getRatingById(@PathVariable Long id) throws NoSuchAdviceException {
        return ratingService.getRatingById(id);
    }
    
    @PutMapping("/update/{id}")
    public Rating updateRating(@PathVariable Long id, @RequestBody Rating rating) {
        return ratingService.updateRating(id, rating);
    }
}
