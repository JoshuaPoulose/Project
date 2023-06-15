package com.rating.service;

import java.util.List;
import java.util.NoSuchElementException;

import org.aspectj.lang.reflect.NoSuchAdviceException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rating.model.Rating;
import com.rating.repository.RatingRepository;

@Service
public class RatingService {
    private final RatingRepository ratingRepository;

    @Autowired
    public RatingService(RatingRepository ratingRepository) {
        this.ratingRepository = ratingRepository;
    }

    public Rating saveRating(Rating rating) {
        return ratingRepository.save(rating);
    }

    public List<Rating> getAllRatings() {
        return ratingRepository.findAll();
    }

    public Rating getRatingById(Long id) throws NoSuchAdviceException {
        return ratingRepository.findById(id).orElseThrow(()-> new NoSuchAdviceException("Rating not found"));
    }
    
    public Rating updateRating(Long id, Rating updatedRating) {
        Rating rating = ratingRepository.findById(id)
                .orElseThrow(() -> new NoSuchElementException("Rating not found"));

        rating.setCourseId(updatedRating.getCourseId());
        rating.setFeedback(updatedRating.getFeedback());
        rating.setRating(updatedRating.getRating());
        rating.setUserId(updatedRating.getUserId());

        return ratingRepository.save(rating);
    }
}
    




