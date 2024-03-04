# Social-Network-API

Social Network API
Social Network API is a RESTful API built with Node.js, Express.js, and MongoDB. It allows users to create, read, update, and delete thoughts and users. Users can also add friends and reactions to thoughts.

Getting Started
To get started with the Social Network API, follow these steps:

Clone the repository:

bash
Copy code
git clone <repository-url>
Install dependencies:

bash
Copy code
npm install
Set up MongoDB:
Ensure you have MongoDB installed on your machine. You can follow the MongoDB installation guide on the official website.

Start the server:

bash
Copy code
npm start
API Endpoints
Users
GET /api/users: Get all users.
GET /api/users/:userId: Get a single user by its _id and populated thought and friend data.
POST /api/users: Create a new user.
PUT /api/users/:userId: Update a user by its _id.
DELETE /api/users/:userId: Remove user by its _id.
User Friends
POST /api/users/:userId/friends/:friendId: Add a new friend to a user's friend list.
DELETE /api/users/:userId/friends/:friendId: Remove a friend from a user's friend list.
Thoughts
GET /api/thoughts: Get all thoughts.
GET /api/thoughts/:thoughtId: Get a single thought by its _id.
POST /api/thoughts: Create a new thought.
PUT /api/thoughts/:thoughtId: Update a thought by its _id.
DELETE /api/thoughts/:thoughtId: Remove a thought by its _id.
Thought Reactions
POST /api/thoughts/:thoughtId/reactions: Create a reaction stored in a single thought's reactions array field.
DELETE /api/thoughts/:thoughtId/reactions/:reactionId: Pull and remove a reaction by the reaction's reactionId value.
Technologies Used
Node.js
Express.js
MongoDB
Mongoose

License
This project is licensed under the MIT License - see the LICENSE file for details.

Feel free to customize this README according to your project's specific details and requirements.





