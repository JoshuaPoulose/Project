package com.favourite.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.favourite.Service.FavouriteService;
import com.favourite.model.Favourite;

import java.util.List;

@RestController
@RequestMapping("/favourites")
public class FavouriteController {
    private final FavouriteService favouriteService;

    @Autowired
    public FavouriteController(FavouriteService favouriteService) {
        this.favouriteService = favouriteService;
    }

    @GetMapping("/getall")
    public ResponseEntity<List<Favourite>> getAllFavourites() {
        List<Favourite> favourites = favouriteService.getAllFavourites();
        return new ResponseEntity<>(favourites, HttpStatus.OK);
    }


    @GetMapping("/get/{id}")
    public ResponseEntity<Favourite> getFavouriteById(@PathVariable Long id) {
        Favourite favourite = favouriteService.getFavouriteId(id);
        if (favourite != null) {
            return new ResponseEntity<>(favourite, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
    
    @PostMapping("/create")
    public ResponseEntity<Favourite> addFavourite(@RequestBody Favourite favourite) {
        Favourite newFavourite = favouriteService.addFavourite(favourite);
        return new ResponseEntity<>(newFavourite, HttpStatus.CREATED);
    }

    @DeleteMapping("/delete/{Id}")
    public ResponseEntity<Void> removeFavourite(@PathVariable Long Id) {
        favouriteService.removeFavourite(Id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}

