package com.andyg.backend.controller;

import com.andyg.backend.model.User;
import com.andyg.backend.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;

@CrossOrigin
@AllArgsConstructor
@RequestMapping("api/users")
@RestController
public class UserController {

    private final UserService userService;
    
    @GetMapping
    public Iterable<User> listUser() {
        return userService.findAll();
    }

    @GetMapping(value = "{id}")
    public User iduserGet(@PathVariable long id){
        return userService.findById(id);
    }

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping
    public String createUser(@RequestBody User user){
        user.setCreateUser(LocalDateTime.now());
        userService.createUser(user);
        return "Save user";
    }


    @PutMapping(value = "/update/{id}")
    public String updateUser(@PathVariable long id, @RequestBody User user){
        userService.updateUser(id, user);
        return "Update user";
    }

    @ResponseStatus(HttpStatus.NO_CONTENT)
    @DeleteMapping(value = "/delete/{id}")
    public void deleteUser(@PathVariable long id){
        userService.deleteUser(id);
    }

}
