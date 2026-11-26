# TaskFlow — Full-Stack CRUD Web Application

[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![SQLite](https://img.shields.io/badge/SQLite-003B57?style=for-the-badge&logo=sqlite&logoColor=white)](https://www.sqlite.org/)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

A complete end-to-end **Full-Stack CRUD (Create, Read, Update, Delete)** web application for structured task and project record management. Developed as the **Major Project** under the Web Development Internship program at **Skillairo Edutech**.

---

## Repository Link
- **GitHub Repository:** https://github.com/ashmit-mitra/skillairo-major-crud-app

---

## Key Features
- **Create:** Add new project tasks with title, category (`Development`, `Design`, `Testing`), and workflow status (`Pending`, `In Progress`, `Completed`).
- **Read:** Dynamically fetch and render all stored records in real time via RESTful `GET` endpoints.
- **Update:** Inline edit mode that populates existing record data into the form and updates the database via `PUT` requests.
- **Delete:** Instant record removal from the SQLite database via `DELETE` requests with live UI synchronization.
- **Persistent Storage:** Automatically initializes and persists relational records inside a local SQLite database (`tasks.db`).

---

## Tech Stack & Architecture
- **Frontend:** HTML5, CSS3, Vanilla JavaScript (`Fetch API`)
- **Backend:** Node.js, Express.js (REST API)
- **Database:** SQLite3

---

## Project Structure

    skillairo-major-crud-app/
    ├── public/
    │   └── index.html      # Frontend UI and Fetch API client logic
    ├── server.js           # Express server, REST API routes, and SQLite schema
    ├── package.json        # Project metadata and dependencies
    ├── package-lock.json   # Dependency lockfile
    └── README.md           # Project documentation

---

## Getting Started Locally
1. **Clone the repository:**

       git clone https://github.com/ashmit-mitra/skillairo-major-crud-app.git

2. **Navigate to the project directory:**

       cd skillairo-major-crud-app

3. **Install dependencies:**

       npm install

4. **Start the server:**

       node server.js

5. **Open in browser:**
   Visit `http://localhost:3000` in Google Chrome or any modern browser.

---

## Author
**Ashmit Mitra**
- GitHub: [@ashmit-mitra](https://github.com/ashmit-mitra)
