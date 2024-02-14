# CineReserve - Your Seamless Movie Experience

## Introduction
Welcome to CineReserve, where movie magic meets effortless booking! Elevate your movie-watching experience with our dynamic Movie Ticket Booking System. CineReserve simplifies the process of selecting tickets, choosing the perfect seats, and finalizing your booking with just a few clicks.

## Project Type
Fullstack MERN project.

## Deployed App
Frontend: https://deployed-site.whatever
Backend: https://deployed-site.whatever
Database: https://deployed-site.whatever

## Directory Structure
CineReserve/
├─ CineRestAPI/
├─ cine_reserve/
│  ├─ ...

## Video Walkthrough of the project
Attach a very short video walkthrough of all of the features [ 1 - 3 minutes ]

## Video Walkthrough of the codebase
Attach a very short video walkthrough of codebase [ 1 - 5 minutes ]

## Features
1. Interactive Seating Arrangement:
   Visual representation of available, selected, and booked seats.
2. Easy Ticket Booking Form:
   User-friendly form with name input, ticket selection dropdown, and "Book" button.
3. Smart Seat Selection:
   Effortless seat selection based on chosen ticket quantity.
4. Booking Validation and Confirmation:
   Intelligent validation ensures the "Book" button activates only when all criteria are met.
5. Booking Details Display:
   Comprehensive summary of all bookings, including usernames, selected seats, and seat statistics.
6. Advanced Features:
   Persistence: Data persists across page reloads with localStorage.
   User Authentication: Optional login for a secure, personalized experience.
   Responsive Design: Consistent and user-friendly interface across devices.

## design decisions or assumptions
1. Modular Component Design:
   Decision: Embrace modular components for scalability and reusability, ensuring clean and maintainable code.
2. Local Storage for Persistence:
   Decision: Use localStorage for data persistence to enhance user experience across page reloads.
3. Responsive Design for Accessibility:
   Decision: Implement a responsive design to ensure accessibility and consistent user experience across various devices.
4. User Authentication as Optional:
   Assumption: User authentication is an optional feature, offering flexibility for both registered and guest users.
5. Clear Visual Feedback for User Actions:
   Decision: Provide clear visual feedback for user actions such as seat selection or form submission to enhance the overall user experience.

## Installation & Getting started
### Frontend (React):

1. Installation:
   - Clone the repository: `git clone [repo-url]`
   - Navigate to the project directory: `cd [project-directory]`
   - Install dependencies: `npm install`

2. Configuration:
   - Open the `.env` file (create one if not present).
   - Set environment variables if needed (API endpoints, etc.).

3. Running the Project:
   - Run the development server: `npm start`
   - Access the app in your browser at `http://localhost:3000`

### Backend (Node.js with Express):

1. Installation:
   - Navigate to the backend directory: `cd [project-directory]/backend`
   - Install dependencies: `npm install`

2. Configuration:
   - Open `.env` file (create one if not present).
   - Set environment variables (MongoDB connection string, secret keys, etc.).

3. Database Schema Check:
   - Open MongoDB Compass or use the MongoDB shell.
   - Connect to the database specified in the environment variables.
   - Check the schema of the relevant collections (e.g., users, bookings).

4. Running the Server:
   - Return to the backend directory: `cd [project-directory]/backend`
   - Start the server: `npm start` or `node server.js`
   - The server runs on `http://localhost:5000`

### Notes:

- Ensure MongoDB is installed and running.
- For persistent data, configure MongoDB Atlas or a local MongoDB instance.
- Adjust API endpoints in the frontend to match the backend configuration.
- Refer to the provided `.env.example` files for necessary environment variables.

Now, your Movie Ticket Booking System should be up and running with the frontend on `http://localhost:3000` and the backend on `http://localhost:5000`. Adjust any settings or configurations as needed for your specific environment.

## Usage
```
# Step 1: Clone the repository
git clone [repo-url]

# Step 2: Navigate to the project directory
cd [project-directory]

# Step 3: Install frontend dependencies
npm install

# Step 4: Start the frontend server
npm start

# Step 5: Open your browser and go to http://localhost:3000

# Step 6: Explore the seating arrangement, book tickets, and enjoy a seamless movie booking experience!
```

Include screenshots as necessary.

## Credentials
Provide user credentials for authenticated pages

## APIs Used
If your application relies on external APIs, document them and include any necessary links or references.

## API Endpoints
In case of Backend Applications provide a list of your API endpoints, methods, brief descriptions, and examples of request/response.
GET /api/items - retrieve all items
POST /api/items - create a new item


## Technology Stack
List and provide a brief overview of the technologies used in the project.
- React
- Redux toolkit
- Node.js
- Express.js
- MongoDB
- Other libraries/modules
