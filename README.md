# node-mongo-rest-api

A simple REST API built with Node.js, Express, and MongoDB covering all CRUD operations — GET, POST, PUT, and DELETE.

🔗 Live Demo: https://node-mongo-rest-api.netlify.app/

---

## What is this project?

This is a beginner-friendly project built to understand how a **frontend**, **backend**, and **database** connect and communicate with each other.

There is no authentication, no complex logic — just the core fundamentals of how data flows through a full-stack application using a REST API.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | HTML, CSS, JavaScript |
| Backend | Node.js, Express.js |
| Database | MongoDB (local) |
| ODM | Mongoose |

---

## What is a REST API?

A REST API is a way for a frontend (webpage) to communicate with a backend (server) using HTTP methods:

| Method | What it does |
|---|---|
| GET | Fetch data from the database |
| POST | Add new data to the database |
| PUT | Update existing data in the database |
| DELETE | Remove data from the database |

---

## Project Structure

```
node-mongo-rest-api/
  app.js        → Backend server (Express + Mongoose)
  index.html    → Frontend (API Tester UI)
```

---

## How it works

```
index.html  →  fetch()  →  Express Routes  →  Mongoose  →  MongoDB
(frontend)     (HTTP)       (app.js)           (bridge)     (database)
```

1. The user interacts with **index.html**
2. JavaScript `fetch()` sends an HTTP request to the Express server
3. Express receives the request and calls the right **Mongoose** method
4. Mongoose talks to **MongoDB** and gets/saves/updates/deletes the data
5. The result is sent back to the frontend and displayed

---

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/items` | Get all items |
| GET | `/items/:id` | Get a single item by ID |
| POST | `/items` | Create a new item |
| PUT | `/items/:id` | Update an item by ID |
| DELETE | `/items/:id` | Delete an item by ID |

---

## Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/yourusername/node-mongo-rest-api.git
cd node-mongo-rest-api
```

### 2. Install dependencies
```bash
npm install
```

### 3. Make sure MongoDB is running locally
MongoDB runs on `mongodb://localhost:27017` by default.

### 4. Start the server
```bash
node app.js
```

You should see:
```
Server running on port 3000
MongoDB Connected!
```

### 5. Open the frontend
Open `index.html` directly in your browser and start testing the API.

---

## How to test each API

**POST** → Type a name in the input and click Add. You'll get back the item with its `_id`.

**GET All** → Click "Get All" to see every item stored in the database.

**PUT** → Copy the `_id` from any response, paste it in the ID field, type a new name, and click Update.

**DELETE** → Paste the `_id` in the Delete field and click Delete.

---

## Key Concepts Learned

- Connecting MongoDB to Node.js using **Mongoose**
- Creating a REST API with **Express.js**
- Understanding **promises** (`.then` / `.catch`)
- How **CRUD operations** map to HTTP methods
- How the frontend and backend communicate using **fetch()**

---

## Why I built this

I built this project to understand the fundamentals of full-stack development — specifically how a database, server, and frontend actually talk to each other. No frameworks, no boilerplate, just the raw basics.

---

## License

MIT
