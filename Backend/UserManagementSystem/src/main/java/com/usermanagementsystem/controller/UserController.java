package com.usermanagementsystem.controller;

import java.util.List;
import java.util.UUID;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.usermanagementsystem.entity.User;
import com.usermanagementsystem.service.UserService;

@RestController
@RequestMapping("/api/users")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping
    public ResponseEntity<List<User>> getAllUsers() {
        return ResponseEntity.ok(userService.getAllUsers());
    }

    @PostMapping
    public ResponseEntity<User> createUser(@RequestBody User user) {
        if (user.getHobbies() == null) {
            user.setHobbies(List.of()); // Initialize hobbies as an empty list if null
        }
        return ResponseEntity.status(201).body(userService.createUser(user));
    }

    @GetMapping("/{id}")
    public ResponseEntity<User> getUserById(@PathVariable("id") String id) {
        UUID uuid = UUID.fromString(id); // Convert string to UUID
        return ResponseEntity.ok(userService.getUserById(uuid));
    }

    @PutMapping("/{id}")
    public ResponseEntity<User> updateUser(@PathVariable("id") UUID id, @RequestBody User user) {
        return ResponseEntity.ok(userService.updateUser(id, user));
    }

    @PutMapping("/{id}/hobbies")
    public ResponseEntity<User> updateHobbies(@PathVariable("id") UUID id, @RequestBody List<String> hobbies) {
        User user = userService.getUserById(id);
        user.setHobbies(hobbies);
        return ResponseEntity.ok(userService.updateUser(id, user));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable("id") UUID id) {
        userService.deleteUser(id);
        return ResponseEntity.noContent().build();
    }
}
