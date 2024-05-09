package com.andyg.backend.service;

import com.andyg.backend.model.User;
import com.andyg.backend.repository.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@AllArgsConstructor
@Service
public class UserService {


    private final UserRepository userRepository;

    public Iterable<User> findAll(){
        return userRepository.findAll();
    }

    public User findById (long id){
        return  userRepository.findById(id).orElse(null);
    }

    public User createUser(User user){
        user.setCreateUser(LocalDateTime.now());
        return userRepository.save(user);
    }

    public User updateUser(long id, User user){
        User updatedUser = findById(id);
        updatedUser.setName(user.getName());
        updatedUser.setLastName(user.getLastName());
        updatedUser.setEmail(user.getEmail());
        updatedUser.setPhone(user.getPhone());
        return userRepository.save(updatedUser);
    }

    public void deleteUser(long id){
        User deletedUser = findById(id);
        userRepository.delete(deletedUser);
    }


}
