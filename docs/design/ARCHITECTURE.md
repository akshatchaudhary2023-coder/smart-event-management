# SEMS Architecture Overview

The Smart Event Management System (SEMS) follows a **Layered Architecture with MVC principles** to ensure clean separation of concerns, maintainability, and scalability.

---

## 🧱 Architecture Style

SEMS is designed using a **Layered + MVC (Model-View-Controller)** approach:

- **Presentation Layer (View)**  
  Handles the user interface and user interaction.  
  In this project, it is a simple HTML frontend (`frontend/index.html`) that displays events and allows registration.

- **Controller Layer**  
  Handles incoming HTTP requests and orchestrates application logic.  
  Implemented using Express.js route handlers.

- **Service Layer**  
  Contains reusable business logic and utility functions.  
  Example: QR code generation (`qrService.js`).

- **Middleware Layer**  
  Handles cross-cutting concerns like authentication and request processing.  
  Example: `authMiddleware.js`.

- **Data Layer (Simulated)**  
  In this prototype, data is stored in-memory (mock data in controllers).  
  In a full system, this would be replaced with a database like MongoDB.

---

## 🔄 Request Flow

A typical user interaction follows this flow:

1. User opens the frontend and views available events  
2. Frontend sends a request to the backend API (`/events`)  
3. Express routes forward the request to controller functions  
4. Controllers process logic and optionally call services  
5. Response is sent back to the frontend  
6. Frontend updates UI accordingly  

---

## 📦 Project Structure Mapping

The architecture is reflected in the repository structure:
backend/
server.js # Entry point
routes/ # API routes
controllers/ # Business logic
services/ # Utility services
middleware/ # Cross-cutting logic

frontend/
index.html # UI layer

docs/design/
architecture.png # Visual diagram

---

## 🎯 Design Goals

The architecture was designed with the following goals:

- **Modularity** → Each layer has a clear responsibility  
- **Low Coupling** → Layers interact through defined interfaces  
- **High Cohesion** → Each module performs a single task  
- **Scalability** → Easy to extend with database, authentication, or frontend frameworks  
- **Maintainability** → Changes in one layer do not affect others  

---

## 🚀 Future Improvements

This architecture can be extended to a full production system by:

- Replacing mock data with a real database (MongoDB)  
- Adding authentication using JWT  
- Converting frontend to React for better UI management  
- Integrating email and payment services  

---

## 📌 Summary

SEMS uses a clean, layered structure that separates concerns effectively while remaining simple enough for a prototype. This ensures the system is easy to understand, extend, and maintain.
