package com.example.codeclan.groupProject.controllers;
import com.example.codeclan.groupProject.models.Item;
import com.example.codeclan.groupProject.repositories.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.HashMap;
import java.util.List;
@RestController
@CrossOrigin
@RequestMapping(value = "/items")
public class ItemController {
    @Autowired
    ItemRepository itemRepository;
    @GetMapping
    public ResponseEntity getAllItems(
            @RequestParam(name = "brand", required = false) String brand,
            @RequestParam(name = "highlighted", required = false) String highlighted
    ){
        if (brand != null){
            return new ResponseEntity<>(itemRepository.findByBrand(brand), HttpStatus.OK);
        }
        boolean highlightedBoolean;
        if(highlighted != null){
            if(highlighted.toLowerCase().equals("true")){
                highlightedBoolean = true;
            }else if(highlighted.toLowerCase().equals("false")) {
                highlightedBoolean = false;
            }else{
                HashMap<String , String> noItem = new HashMap<>();
                noItem.put("noItemFound", "0");
                return new ResponseEntity<>(noItem, HttpStatus.BAD_REQUEST);
            }
            return new ResponseEntity<>(itemRepository.findByHighlighted(highlightedBoolean), HttpStatus.OK);
        }
        if(itemRepository.findAll().size() == 0){
            HashMap<String , String> noItem = new HashMap<>();
            noItem.put("noItemFound", "0");
            return new ResponseEntity<>(noItem, HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(itemRepository.findAll(), HttpStatus.OK);
    }
    @GetMapping("{id}")
    public ResponseEntity getItem(@PathVariable String id){
        if (!itemRepository.findById(id).isPresent()){
            HashMap<String , String> noItem = new HashMap<>();
            noItem.put("noItemFound", "0");
            return new ResponseEntity<>(noItem, HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(itemRepository.findById(id), HttpStatus.OK);
    }
    @PostMapping
    public ResponseEntity<Item> postItems(@RequestBody Item item){
        System.out.println(item);
        itemRepository.save(item);
        return new ResponseEntity<>(item, HttpStatus.CREATED);
    }
    @PatchMapping("{id}")
    public ResponseEntity putItems(@RequestBody Item item, @PathVariable String id) {
        if (!itemRepository.findById(id).isPresent()){
            HashMap<String , String> noItem = new HashMap<>();
            noItem.put("noItemFound", "0");
            return new ResponseEntity<>(noItem, HttpStatus.BAD_REQUEST);
        }
        itemRepository.save(item);
        return new ResponseEntity<Item>(item, HttpStatus.CREATED);
    }
    @DeleteMapping("{id}")
    public ResponseEntity<List<Item>> deleteItems(@PathVariable String id){
        itemRepository.deleteById(id);
        return new ResponseEntity<>(itemRepository.findAll(), HttpStatus.OK);
    }
}