// src/DND/api.js

const BASE_URL = "http://localhost:8083/api/users"; // Update with your backend URL

export const createUser = async (userData) => {
    try {
        const response = await fetch(BASE_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
        });

        if (!response.ok) {
            throw new Error("Failed to create user");
        }

        return await response.json();
    } catch (error) {
        console.error("Error creating user:", error);
        throw error;
    }
};

export const updateUser = async (userId, updatedData) => {
    try {
        const response = await fetch(`${BASE_URL}/${userId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedData),
        });

        if (!response.ok) {
            throw new Error("Failed to update user");
        }

        return await response.json();
    } catch (error) {
        console.error("Error updating user:", error);
        throw error;
    }
};

export const getUsers = async () => {
    try {
        const response = await fetch(BASE_URL);

        if (!response.ok) {
            throw new Error("Failed to fetch users");
        }

        return await response.json();
    } catch (error) {
        console.error("Error fetching users:", error);
        throw error;
    }
};

export const deleteUser = async (userId) => {
    try {
        const response = await fetch(`${BASE_URL}/${userId}`, {
            method: "DELETE",
        });

        if (!response.ok) {
            throw new Error("Failed to delete user");
        }
    } catch (error) {
        console.error("Error deleting user:", error);
        throw error;
    }
};
