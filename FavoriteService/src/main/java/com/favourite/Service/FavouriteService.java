package com.favourite.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.favourite.Repository.FavouriteRepository;
import com.favourite.model.Favourite;

import java.util.List;

@Service
public class FavouriteService {
    private final FavouriteRepository favouriteRepository;

    @Autowired
    public FavouriteService(FavouriteRepository favouriteRepository) {
        this.favouriteRepository = favouriteRepository;
    }

    public List<Favourite> getAllFavourites() {
        return favouriteRepository.findAll();
    }
    
    public Favourite getFavouriteId(Long Id) {
        return favouriteRepository.findById(Id).orElse(null);
    }


    public Favourite addFavourite(Favourite favourite) {
        return favouriteRepository.save(favourite);
    }

    public void removeFavourite(Long Id) {
        favouriteRepository.deleteById(Id);
    }
}

