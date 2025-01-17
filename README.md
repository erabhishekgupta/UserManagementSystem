
# User Management System

The User Management System is a full-stack application designed to manage user information, visualize user connections, and assign hobbies to users through an intuitive drag-and-drop interface. It leverages React Flow for frontend graph visualization and Spring Boot for backend data management, creating a dynamic and interactive experience for users.

## Acknowledgements

I would like to express my sincere gratitude to the Cybernauts Development Assignment team for providing me with the opportunity to work on the User Management System project. This task challenged me to apply my technical skills in a real-world context, and it has been an invaluable learning experience.

I would also like to thank the mentors and colleagues involved in guiding me throughout this project, offering valuable insights and suggestions that helped shape its development.

Finally, I am grateful to my family and friends for their unwavering support and encouragement during the course of this project. Their motivation played a crucial role in its successful completion.

This project has contributed greatly to my professional growth, and I am thankful for the opportunity to undertake such a stimulating and challenging assignment.
## Installation

This guide provides step-by-step instructions for setting up the User Management System project on your local environment.

## Prerequisites
Before proceeding, ensure you have the following installed on your machine:

### 1. Java 11 or higher (for the backend API)
Download Java

### 2. Node.js (for the frontend application built with React and TypeScript)
Download Node.js

### 3. MySQL or any relational database (for database storage)
Download MySQL

### 4. Git (for version control)
Download Git
## Backend Setup (Spring Boot)
### 1. Clone the repository:

Clone the project repository from your version control system (e.g., GitHub):

git clone https://github.com/yourusername/user-management-system.git

cd user-management-system/backend

### 2. Set up MySQL Database:

Create a new database in MySQL (or your chosen database system):

CREATE DATABASE user_management;

### 3. Configure Application Properties:

Open application.properties (located in the src/main/resources folder) and configure the database connection:

spring.datasource.url=jdbc:mysql://localhost:3306/user_management
spring.datasource.username=root
spring.datasource.password=password
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver

### 4. Build and Run the Backend:

Using Maven or Gradle, build the project:

#### For Maven:
mvn clean install
mvn spring-boot:run

#### For Gradle:

gradle build
gradle bootRun

#### The backend API should now be running at http://localhost:8080.

## Frontend Setup (React with TypeScript)
Clone the repository:

### 1. Navigate to the frontend folder:

cd ../frontend
### 2. Install Dependencies:

#### Install all required npm packages:

npm install

### 3. Configure API Base URL:

In your src/api/axios.js (or equivalent file), configure the base URL to point to your backend:

const API_URL = "http://localhost:8080/api";
### 4. Run the Frontend Application:

Start the React app in development mode:

#### npm start
The frontend should now be running at http://localhost:3000.

### Database Schema
The backend will automatically create the necessary database tables when you run the application, based on your entity mappings. However, you can also import the schema manually if needed. Here is an example SQL schema for user management:

CREATE TABLE users (
   id INT AUTO_INCREMENT PRIMARY KEY,
   username VARCHAR(50) NOT NULL,
   password VARCHAR(255) NOT NULL,
   email VARCHAR(100),
   created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

### Testing the Application
#### Frontend:
 Navigate to http://localhost:3000 in your browser to interact with the user interface.
#### Backend: 
Use Postman or any other API testing tool to interact with the backend endpoints at http://localhost:8080/api.

#### Additional Information
React Flow Integration: The frontend includes a react-flow diagram to visualize user relationships, which you can interact with directly on the dashboard.

#### Troubleshooting
Backend Not Starting: Ensure MySQL is running and the connection settings in application.properties are correct.
API Errors: Check the backend logs for errors and ensure the database schema matches the expected structure.
Frontend Not Displaying: Verify the frontend is correctly connected to the backend and check the browser console for errors.
## RoadMap

### Phase 1: Planning and Requirement Analysis
#### Understand the Assignment Requirements:

- Define the scope of the project (e.g., CRUD operations, user visualization, etc.).
- Identify the key features (e.g., user creation, editing, deletion, relationship visualization using React Flow).
#### Tech Stack Finalization:

- Confirm the frontend, backend, and database technologies (React, TypeScript, Spring Boot, MySQL, etc.).
#### Design Architecture:

- Plan a high-level architecture, including:
Backend API structure.
- Frontend component hierarchy.
- Database schema for user data.
### Phase 2: Backend Development
#### Set Up the Spring Boot Project:

- Initialize the project using Maven or Gradle.
- Configure the database connection in application.properties.
#### Develop the REST API:

#### Implement endpoints for CRUD operations:
- GET /users – Fetch all users.
- POST /users – Add a new user.
- PUT /users/{id} – Update user details.
- DELETE /users/{id} – Delete a user.
#### Database Design and Integration:

- Design the user table schema.
- Use Hibernate/JPA for database interactions.
#### Testing the Backend:

- Use Postman or similar tools to test each API endpoint.
### Phase 3: Frontend Development
#### Set Up the React Project:

- Initialize the React app with TypeScript support using create-react-app.
- Install required dependencies (e.g., Axios, React Flow).
#### Build UI Components:

- Design reusable components:
- User Table/List for displaying users.
- User Form for adding/editing user details.
- React Flow visualization for user relationships.
#### Integrate API with Axios:

- Connect the frontend to the backend using Axios for API calls.
- Handle loading states, errors, and responses in the UI.
#### Styling:

- Use CSS/SCSS for a responsive and user-friendly design.
### Phase 4: Testing and Debugging
#### Unit Testing:

- Test individual components and API endpoints.
#### Integration Testing:

- Ensure smooth communication between frontend and backend.
#### Frontend Debugging:

- Use browser developer tools to debug and optimize the React app.
#### Backend Debugging:

- Check backend logs for errors and ensure proper database interactions.

### Phase 5: Deployment (*UnderProcess)*
#### Prepare for Deployment:

- Configure environment variables for production.
- Optimize the React build using npm build.
Deploy the Application:

#### Backend: Deploy to a cloud server (e.g., AWS, Azure, or Heroku).

#### Frontend: Deploy to a hosting platform (e.g., Vercel, Netlify).
#### Database: Set up a production database (e.g., AWS RDS).

#### Test in the Production Environment:

- Verify the application’s functionality in the live environment.

*This roadmap ensures a step-by-step approach to completing the project efficiently while maintaining quality and scalability.*
## Screenshots
## Frontend Section
### screenshot-1
![Image](https://github.com/user-attachments/assets/65e8593b-767c-47a0-93f3-90d402db00d3)
### screenshot-2
![Image](https://github.com/user-attachments/assets/5014bb7f-9362-4dca-8737-3c2d43f54d97)
### screenshot-3
![Image](https://github.com/user-attachments/assets/a166274e-0dfd-41b6-893b-0b05bc39e0a8)
### screenshot-4
![Image](https://github.com/user-attachments/assets/0ac71462-b895-4033-b8cd-479244577eab)
### Api-Testing Screenshots
### screenshot-1
![Image](https://github.com/user-attachments/assets/9e012435-0f38-4151-98ed-24beed5a7b7d)
### screenshot-2
![Image](https://github.com/user-attachments/assets/1a28d0f1-6428-497a-a681-91075199fc02)
### screenshot-3
![Image](https://github.com/user-attachments/assets/7388a341-ce96-4432-8be4-7434c76fc352)



## Tech Stack

The User Management System project uses the following technology stack:

#### Frontend
**React**

- For building the user interface.
- Ensures a dynamic and responsive user experience.
**TypeScript**

- Adds static typing to JavaScript for better code quality and maintainability.
**React Flow**

- For visualizing user relationships and hierarchies in an interactive diagram format.
**CSS/SCSS**

- For styling and designing a modern, responsive UI.
**Axios**

- For handling API requests to the backend.
#### Backend
**Spring Boot**

-A Java-based framework for creating robust, production-grade REST APIs.

**Hibernate**

- An ORM tool for interacting with the database efficiently.
**JPA** (Java Persistence API)

- For defining data access and mapping between objects and relational databases.
**MySQL**

- Relational database to store user data and related information.

**Postman**

- For testing and debugging REST API endpoints.
**Git/GitHub**

- For version control and collaboration.
**Node.js & npm**

- For managing frontend dependencies and running development scripts.




