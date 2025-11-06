# 🏋️‍♂️ Workout Buddy

Workout Buddy is a **MERN stack fitness tracking web app** that allows users to sign up, log in, and manage their workout sessions securely.  
Each user can create, view, and delete workouts while data is stored in MongoDB.

---

## 🚀 Features
- 🔐 **User Authentication** (JWT-based Login & Signup)
- 🧍 Each user has their **own workouts**
- ➕ **Add, view, delete workouts**
- ⚡ Built with the **MERN stack** (MongoDB, Express, React, Node.js)
- 🗄️ Protected routes using **JWT middleware**
- 🌐 Integrated with **MongoDB Atlas** for cloud data storage

---

## 🛠️ Tech Stack
**Frontend:** React, Context API, CSS  
**Backend:** Node.js, Express.js  
**Database:** MongoDB Atlas  
**Auth:** JSON Web Tokens (JWT)

---

## 🧩 Folder Structure
## 🧩 Folder Structure
backend/
- ┣ controllers/
- ┣ models/
- ┣ routes/
- ┣ middleware/
-┗ server.js

- frontend/
- ┣ src/
- ┃ ┣ components/
- ┃ ┣ pages/
- ┃ ┣ hooks/
- ┃ ┗ App.js

## How It Works
- User signs up and receives a JWT token.
- JWT token is stored locally and used to authenticate API requests.
- Only logged-in users can create or view workouts.
- Workouts are user-specific in MongoDB.