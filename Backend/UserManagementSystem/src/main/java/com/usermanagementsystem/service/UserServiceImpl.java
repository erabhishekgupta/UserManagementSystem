package com.usermanagementsystem.service;

import com.usermanagementsystem.entity.User;
import com.usermanagementsystem.exception.UserNotFoundException;
import com.usermanagementsystem.repository.UserRepository;

import org.springframework.stereotype.Service;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.List;
import java.util.UUID;

@Service
public class UserServiceImpl implements UserService {

    private static final Logger logger = LoggerFactory.getLogger(UserServiceImpl.class);
    private final UserRepository userRepository;

    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public List<User> getAllUsers() {
        logger.info("Fetching all users");
        return userRepository.findAll();
    }

    @Override
    public User getUserById(UUID id) {
        logger.info("Fetching user by ID: {}", id);
        return userRepository.findById(id)
                .orElseThrow(() -> new UserNotFoundException("User not found with ID: " + id));
    }

    @Override
    public User createUser(User user) {
        validateUser(user);
        logger.info("Creating new user with username: {}", user.getUsername());
        return userRepository.save(user);
    }

    @Override
    public User updateUser(UUID id, User user) {
        validateUser(user);
        logger.info("Updating user with ID: {}", id);
        User existingUser = getUserById(id);

        if (user.getUsername() != null) {
            existingUser.setUsername(user.getUsername());
        }
        if (user.getAge() != null && user.getAge() > 0) {
            existingUser.setAge(user.getAge());
        }
        if (user.getHobbies() != null) {
            existingUser.setHobbies(user.getHobbies());
        }

        return userRepository.save(existingUser);
    }

    @Override
    public void deleteUser(UUID id) {
        logger.info("Deleting user with ID: {}", id);
        if (!userRepository.existsById(id)) {
            throw new UserNotFoundException("User not found with ID: " + id);
        }
        userRepository.deleteById(id);
    }

    private void validateUser(User user) {
        logger.info("Validating user: {}", user);

        if (user.getUsername() == null || user.getUsername().isEmpty()) {
            logger.error("Validation failed: Username cannot be null or empty");
            throw new IllegalArgumentException("Username cannot be null or empty.");
        }
        if (user.getAge() != null && user.getAge() <= 0) {
            logger.error("Validation failed: Age must be greater than zero");
            throw new IllegalArgumentException("Age must be greater than zero.");
        }
        if (user.getHobbies() == null) {
            logger.error("Validation failed: Hobbies cannot be null");
            throw new IllegalArgumentException("Hobbies cannot be null.");
        }
    }
}
