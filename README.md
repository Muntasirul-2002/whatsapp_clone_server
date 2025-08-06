# WeCollab Server

This folder contains the backend server for the WeCollab application. It is built with Node.js, Express, MongoDB (Mongoose), and uses Socket.IO for real-time communication.

## Features
- User authentication and authorization
- Real-time messaging (direct and channel-based)
- File uploads and profile management
- RESTful API endpoints for users, channels, contacts, and messages
- Socket.IO integration for instant message delivery

## Folder Structure
- `controller/` - Route controllers for authentication, channels, contacts, and messages
- `middleware/` - Express middleware (e.g., authentication)
- `models/` - Mongoose models for users, channels, and messages
- `routes/` - Express route definitions
- `uploads/` - Uploaded files and profile images
- `socket.js` - Socket.IO server setup and event handling
- `index.js` - Main server entry point

## Getting Started
1. Install dependencies:
   ```bash
   npm install
   ```
2. Set up your environment variables (see `.env.example` if available).
3. Start the server:
   ```bash
   npm start
   ```

## Notes
- Ensure MongoDB is running and accessible.
- The server expects a compatible client (see `../client`).
