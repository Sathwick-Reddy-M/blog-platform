# Blog Platform

## Project Overview

The Blog Platform is a full stack web application, featuring a React based frontend for intuitive blog creation, editing, and publishing. With seamless Firebase Authentication, it ensures secure user interactions.MongoDB stores author details, blogs, and drafts. The backend, powered by Express.js, provides RESTful APIs for data retrieval with the help of MongoDB database.

Checkout the app [here](https://sathwick-blog-platform.netlify.app/).

## Features

- **Blog Management:**

  - Create, edit, and delete blog posts through a user-friendly interface.
  - Save drafts for future publication and manage them efficiently.
  - Publish drafted content to make it publicly accessible.

- **Author Details:**

  - Display author information, providing a personalized touch to each blog post.
  - Connect authors to their respective posts for better content attribution.

- **User Authentication using Firebase:**

  - Secure user sign-up and sign-in functionality using Firebase Authentication.

- **Responsive User Interface:**

  - Utilizes React.js for a responsive and dynamic user interface.
  - Well-organized components for easy navigation and an engaging user experience.

- **Backend API Endpoints with Pagination**

  - Express.js server providing robust API endpoints for frontend backend communication.
  - Pagination of the GET requests.
  - MongoDB integration for efficient storage and retrieval of blog-related data.

## Setup Instructions

### Client

1. Clone the repository.
2. Navigate to the `client` directory
3. Install dependencies using `npm install`.
4. Start the development server with `npm start`.
5. Make sure to configure Firebase credentials for authentication.

### Server

1. Navigate to the `server` directory:
2. Install dependencies with `npm install`
3. Set up your MongoDB connection:

- Create a `.env` file in the `server` directory.
- Add your MongoDB connection password, `MONGODB_PASSWORD`.

4. Run the server with `node src/server.js`

Open your browser and go to [http://localhost:3000](http://localhost:3000) to access the application.

## Frontend - ReactJS

## Components

### 1. Author Component

- Displays author details and their associated blogs.
- Utilizes React hooks for state management.

### 2. BlogCard Component

- Displays a preview of a blog post.
- Integrates DOMPurify for sanitizing and rendering HTML content.

### 3. Blog Component

- Displays a single blog post.
- Fetches blog data using the `getBlogPost` utility function.
- Utilizes DOMPurify for sanitizing and rendering HTML content.

### 4. DraftCard Component

- Displays a preview of a draft.
- Fetches draft data using the `getDraft` utility function.
- Utilizes DOMPurify for sanitizing and rendering HTML content.

### 5. Drafts Component

- Displays a list of drafts for a specific author.
- Allows creating new drafts and navigating to the editor.
- Fetches draft data using the `getDraftsByAuthor` utility function.

### 6. Editor Component

- Provides a rich text editor using ReactQuill.
- Supports saving drafts and publishing blogs.

### 7. Home Component

- Displays a list of blog posts on the home page utilising pagination.
- Fetches blog post data using the `getBlogPosts` utility function.

### 8. Navigation Component

- Handles user navigation and authentication.
- Displays a dropdown menu for authenticated users with links to blogs and drafts.
- Integrates Firebase authentication functions and custom utility functions.

### 9. Signin Component

- Allows users to sign in using email and password.
- Uses Firebase authentication and updates the current user state.

### 10. Signup Component

- Allows users to sign up with a name, email, and password.
- Utilizes Firebase authentication and custom utility functions for user creation.

## Firebase Authentication Management

- **SignUp (`signUpUser`):** Utilizes Firebase Authentication to securely create a new user account by providing an email and password. Returns a promise, logging a success message upon completion.

- **Login (`signInUser`):** Enables users to sign in by verifying their credentials (email and password) using Firebase Authentication. Returns a promise, providing the user object upon successful authentication.

- **Current User Update (`updateCurrentUser`):** Keeps track of the current user by using Firebase's `onAuthStateChanged` listener. This asynchronous function sets the user state and returns a promise resolving to the current user.

- **Logout (`signOutUser`):** Utilizes Firebase Authentication to sign out the current user, ensuring secure logout functionality. Returns a promise, allowing for further actions after successful logout.

## Backend - NodeJS

## Server API Endpoints

The Blog Platform server provides the following API endpoints:

### Authors

- **Get Author Details:**

  - **Endpoint:** `GET /api/v1/authors/:authorId`
  - **Description:** Retrieve details of a specific author.
  - **Parameters:**
    - `authorId`: The unique identifier of the author.

- **Get Author Blogs:**
  - **Endpoint:** `GET /api/v1/authors/authorBlogs/:authorId`
  - **Description:** Retrieve blogs authored by a specific author.
  - **Parameters:**
    - `authorId`: The unique identifier of the author.

### Blogs

- **Get All Blogs:**

  - **Endpoint:** `GET /api/v1/blogs/all`
  - **Description:** Retrieve all published blogs.

- **Get Blog Details:**

  - **Endpoint:** `GET /api/v1/blogs/:blogId`
  - **Description:** Retrieve details of a specific blog.
  - **Parameters:**
    - `blogId`: The unique identifier of the blog.

- **Create Blog:**
  - **Endpoint:** `POST /api/v1/blogs`
  - **Description:** Create a new blog.
  - **Request Body:** JSON object representing the blog details.

### Drafts

- **Get Draft Details:**

  - **Endpoint:** `GET /api/v1/drafts/getDraft/:draftId`
  - **Description:** Retrieve details of a specific draft.
  - **Parameters:**
    - `draftId`: The unique identifier of the draft.

- **Delete Draft:**

  - **Endpoint:** `DELETE /api/v1/drafts/deleteDraft/:draftId`
  - **Description:** Delete a draft.
  - **Parameters:**
    - `draftId`: The unique identifier of the draft.

- **Update Draft:**

  - **Endpoint:** `POST /api/v1/drafts/updateDraft`
  - **Description:** Create or update a draft.
  - **Request Body:** JSON object representing the draft details.

- **Get Author Drafts:**

  - **Endpoint:** `GET /api/v1/drafts/authorDrafts/:authorId`
  - **Description:** Retrieve drafts authored by a specific author.
  - **Parameters:**
    - `authorId`: The unique identifier of the author.

- **Get New Draft ID:**
  - **Endpoint:** `GET /api/v1/drafts/draftsCount`
  - **Description:** Retrieve a new unique draft ID.

### Users

- **Insert User:**

  - **Endpoint:** `POST /api/v1/users`
  - **Description:** Insert a new user.
  - **Request Body:** JSON object representing the user details.

- **Get User Details:**
  - **Endpoint:** `GET /api/v1/users/:userEmail`
  - **Description:** Retrieve details of a specific user.
  - **Parameters:**
    - `userEmail`: The email address of the user.

## MongoDB Schemas

### Authors Schema

The `authors` collection in MongoDB stores information about authors. Each author has an `id` (Number), `firstName` (String), `lastName` (String), and `username` (String).

### Blogs Schema

The `blogs` collection in MongoDB holds data about blog posts. Each blog has an `id` (Number), `name` (String), `author` (String), `authorId` (Number), `contentHTML` (String), `datePublished` (Date), and `dateUpdated` (Date).

### Drafts Schema

The `drafts` collection in MongoDB contains drafts created by authors. Each draft is identified by an `id` (Number), includes `contentHTML` (String), is associated with an `authorId` (Number), and has creation and update dates (`dateCreated` and `dateUpdated`).

### Users Schema

The `users` collection in MongoDB stores user information. Each user has a `name` (String), `userEmail` (String), and is linked to an `authorId` (Number).

## Project Structure

### Client

- `public`: Contains static assets
- `src`: Holds the source code for the React.js frontend application.
  - `components`: Organizes React components by feature, including there respective styled components.
  - `utils`: Includes utility functions, such as Firebase-related utilities for user authentication and general request utilities for retrieving data from the server.

### Server

- `src`: Contains the source code for the backend server.
  - `models`: Defines Mongoose models for MongoDB schemas, covering authors, blogs, drafts, and users.
  - `routes`: Includes Express.js route handlers for authors, blogs, drafts, and users.
  - `utils`: Contains general utility functions, including those for making database queries.
