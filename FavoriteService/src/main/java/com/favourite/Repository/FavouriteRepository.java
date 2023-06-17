package com.favourite.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.favourite.model.Favourite;

public interface FavouriteRepository extends JpaRepository<Favourite, Long> {
    
}

