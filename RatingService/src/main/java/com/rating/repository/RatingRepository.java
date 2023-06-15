package com.rating.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.rating.model.Rating;

public interface RatingRepository extends JpaRepository<Rating, Long> {
   
}

