# Book Store Website
## A full-stack web application for an online book store, built using the MERN stack. It allows users to browse, purchase, and manage books, while providing admin functionalities to manage the book catalog and sales.

## Features
### 🛍️ User Features
#### Browse a wide range of books categorized by genres.
#### Detailed book pages with descriptions, pricing, and ratings.
#### Secure user authentication (Sign Up, Login, Logout).
#### Add books to the cart and checkout using secure payment options.
#### View purchased books and track order history.

### 🌐 Responsive Design
#### Fully responsive layout for seamless access across devices, including desktops, tablets, and mobile phones.
### 🔒 Secure Platform
#### Authentication and authorization implemented using JWT.
#### Data validation and secure API endpoints.
## Tech Stack
### Frontend
#### ReactJS: For building a dynamic and interactive user interface.
#### Tailwind CSS: For modern, responsive, and efficient styling.
### Backend
#### Node.js and Express.js: For building a robust server-side application.
#### MongoDB: For storing user and book data.
### Tools & Libraries
#### Mongoose: For MongoDB object modeling.
#### JWT: For secure authentication.
# How to Run the Project
#### Clone the repository:
      git clone <repository-url>  
#### Navigate to the project directory:
      cd book-store  
#### Install dependencies:

#### For the backend:
      cd backend  
      npm install  
#### For the frontend:
    cd frontend  
    npm install  
#### Set up environment variables:
    Create a .env file in the backend folder and add:
    env
    PORT=5000  
    MONGO_URI=<your-mongodb-uri>  
    JWT_SECRET=<your-jwt-secret>  
    STRIPE_SECRET=<your-stripe-secret> (if Stripe is used)  
#### Start the servers:

#### Backend:
      npm run dev  
#### Frontend:
    npm start  
Open the website in your browser at http://localhost:3000.

#### Future Enhancements
##### Add a review and rating system for books.
##### Implement filters and search functionality for better navigation.
##### Create a wishlist feature for users to save books for later.
##### Enable e-book preview for users.
