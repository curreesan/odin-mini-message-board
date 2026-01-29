# Mini Message Board

A simple **message board web app** built with **Node.js**, **Express**, **EJS**, and **PostgreSQL** — following _The Odin Project_ NodeJS curriculum.

Users can view existing messages, submit new ones (with name and text), and view individual message details. Messages are now **persistently stored** in a PostgreSQL database (no longer reset on server restart).

---

## 📌 Live Demo

👉 https://odin-mini-message-board-emsq.onrender.com/

_(Hosted on Render with PostgreSQL database)_

---

## 🧱 Features

- View all messages on the home page (newest first)
- Submit new messages via a simple form (name + message text)
- View individual message details
- **Persistent storage** using PostgreSQL (messages survive server restarts and deploys)
- Basic server-side input validation
- Clean modular structure (routes separated, database queries in dedicated file)
