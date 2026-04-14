# Smart Event Management System (SEMS)

## Vision Document

## 1.1 Project Name & Overview

**Project Name:** Smart Event Management System (SEMS)

**Overview:**  
SEMS is a full-stack MERN web application that digitises the complete lifecycle of events — from creation and promotion through registration, ticketing, and post-event analytics.  

Organizers get a powerful dashboard with live attendance data, while attendees experience a seamless journey from event discovery to check-in via auto-generated QR code tickets.  

The platform replaces spreadsheets, email chains, and manual check-ins with a single, scalable solution suitable for both small workshops and large conferences.

---

## 1.2 Problem it Solves

Event management today relies on disconnected tools like Google Forms, spreadsheets, and manual processes. This leads to:

- Lost or duplicate registrations  
- Slow and error-prone check-in processes  
- Lack of real-time visibility for organizers  
- No centralized platform for event discovery and ticket access  

**Solution:**  
SEMS provides a unified platform where organizers can manage everything efficiently, and users can register and access events seamlessly.

---

## 1.3 Target Users (Personas)

### 👤 Independent Organizer  
A college club president or community leader managing multiple events annually with limited technical knowledge and budget.

### 🏢 Corporate Event Manager  
A professional managing conferences, workshops, or product launches requiring real-time analytics and structured management.

### 🎓 Casual Attendee  
A student or working professional looking to discover events and register quickly with minimal effort.

---

## 1.4 Vision Statement

To become the go-to platform that simplifies event management and enhances user experience, providing seamless control for organizers and effortless participation for attendees.

---

## 1.5 Key Features / Goals

- Rich event creation (title, date, venue, category, capacity, pricing)  
- QR code ticket generation for fast check-in  
- Real-time organizer dashboard with analytics  
- Smart search and filtering  
- Automated waitlist system  
- Secure authentication using JWT  
- Docker-based development environment  

---

## 1.6 Success Metrics

- **Registration Completion Rate:** > 85%  
- **Check-in Speed:** < 3 seconds per attendee  
- **Organizer Retention:** Repeat usage within 60 days  
- **System Uptime:** 99.5% availability  
- **Page Load Time:** < 2 seconds  

---

## 1.7 Assumptions & Constraints

### Assumptions
- Users have internet access  
- Valid email is provided for communication  
- Attendees have smartphones for QR code usage  
- Email services are available via SMTP  

### Constraints
- Web-based platform (no mobile app for MVP)  
- Payment integration may be added later  
- Supports up to 1000 users initially  
- Uses only open-source tools  

---

## 2. Tech Stack

| Component | Technology | Purpose |
|----------|-----------|--------|
| Frontend | React.js (Vite) | UI development |
| Styling | Tailwind CSS | Responsive design |
| Backend | Node.js + Express.js | API server |
| Database | MongoDB + Mongoose | Data storage |
| Auth | JWT + bcrypt | Secure authentication |
| Email | Nodemailer + SendGrid | Notifications |
| QR Code | qrcode (npm) | Ticket generation |
| Containerization | Docker | Development environment |
| Version Control | Git + GitHub | Code management |

---

## 3. SDLC Model — Agile Scrum

**Chosen Model:** Agile Scrum (2-week sprints)

### Why Agile?

- Enables iterative development  
- Allows continuous feedback  
- Aligns with MoSCoW prioritization  
- Supports evolving user requirements  

---

## 📌 Repository Link
https://github.com/akshatchaudhary2023-coder/smart-event-management

---

## 📌 Figma Wireframes
> https://www.figma.com/design/ajp3Chh0uSp0p39Xvrmdvr/Untitled?node-id=0-1&t=QkKDKkR90aBUgaDg-1

---
---

## Implementation

This project includes a basic working prototype of the Smart Event Management System (SEMS).

- Frontend: HTML-based user interface displaying events
- Backend: Node.js + Express API
- API Endpoints:
  - GET /events → fetch available events
  - POST /register → register user for event

The frontend communicates with the backend using HTTP requests, demonstrating the system architecture described in the design document.

---

## Project Structure
smart-event-management/
│
├── frontend/ # User interface
│ └── index.html
│
├── backend/ # API server
│ └── server.js
│
├── docs/
│ └── design/
│ ├── architecture.png
│ └── wireframes.png
│
└── README.md

---

## Design Artifacts

- Architecture Diagram: docs/design/architecture.png  
- UI Wireframes (Figma): docs/design/wireframes.png  

These artifacts represent the system design, UI structure, and architectural decisions made during development.

---
