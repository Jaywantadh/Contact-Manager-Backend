# Contact-Manager-Backend
It covers different Nodejs, Express, MongoDB &amp; JWT Topics and implementation in one single project. I built a contact manager backend application from scratch and by you will have good understanding of building projects with Express after watching my repository.


---

# Contact Manager API

## Overview

This project is a contact manager API built using Node.js, Express, MongoDB, and JWT (JSON Web Tokens). It provides endpoints to perform CRUD (Create, Read, Update, Delete) operations on contacts and handles errors seamlessly.

## Features

- Create a new contact
- Retrieve a list of contacts
- Retrieve a specific contact by ID
- Update an existing contact
- Delete a contact
- Secure authentication using JWT

## Prerequisites

- Node.js (version 14 or above)
- MongoDB (Make sure it's running locally or provide the connection string)
- Postman or any API testing tool

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/contact-manager-api.git
    ```

2. Navigate to the project directory:

    ```bash
    cd contact-manager-api
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Create a `.env` file in the root directory and add the following configurations:

    ```env
    PORT=3000
    MONGODB_URI=mongodb://localhost:27017/contact_manager #its just an example
    JWT_SECRET=your_secret_key #you can take the variable as you want.
    ```

    Make sure to replace `your_secret_key` with a secure secret key for JWT.

5. Start the application:

    ```bash
    npm start
    ```

## Error Handling

The API handles errors gracefully and provides meaningful error messages in the response.

## Testing

You can use tools like Postman to test the API endpoints. Import the provided Postman collection (`ContactManagerAPI.postman_collection.json`) for convenient testing.

## License

This project is licensed under the [MIT License](LICENSE).

---


