import cors from 'cors';
import express from 'express';
import argon from 'argon2';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import mysql from 'mysql2/promise'

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
const PORT = 3000;
app.use(cors({ origin: 'http://localhost:3001' }));

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'racedatabase',
});

//Register
app.post("/register", async (req, res) => {
    const { username, password } = req.body;
    try{
        const [users] = await db.query("SELECT * FROM users WHERE username = ?", [username]);
        if(users.length > 0){
             return res.status(400).json({message: "Username already exists."});
        }

        const hashedPassword = await argon.hash(password);

        await db.query("INSERT INTO users (username, password) VALUES (?, ?)", [username, hashedPassword]);
        res.status(201).json({message: "User registered successfully."});
    } catch (err){
        console.error("Error during register: ", err);
        res.status(500).json({message: "Error registering user."});
    }
});

//LogIn
app.post("/login", async (req, res) => {
    const { username, password } = req.body;

    try{
        //Keresés
        const [users] = await db.query("SELECT * FROM users WHERE username = ?", [username]);
        if(users.length === 0){
            return res.status(400).json({message: "Invalid credentials."});
        }
        const user = users[0];

        //Jelszó ellenőrzése
        const isMatch = await argon.verify(user.password, password);
        if (!isMatch){
            return res.status(400).json({message: "Invalid credentials."});
        }

        //JWT token
        const token = jwt.sign({id: user.id, username: user.username}, process.env.JWT_SECRET, {expiresIn: "1h"});
        res.json({token});
    } catch (err){
        console.error("Error during login backend", err);
        res.status(500).json({message: "Error logging in backend."});
    }
});

app.put("/profile", async (req, res) => {
    const { token } = req.headers;
    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }
  
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
  
      const { username, newPassword } = req.body;
  
      const [users] = await db.query("SELECT * FROM users WHERE id = ?", [decoded.id]);
      if (users.length === 0) {
        return res.status(400).json({ message: "User not found" });
      }
  
      const user = users[0];
  
      const hashedPassword = newPassword ? await argon.hash(newPassword) : user.password;
  
      await db.query("UPDATE users SET username = ?, password = ? WHERE id = ?", [username || user.username, hashedPassword, user.id]);
      res.json({ message: "Profile updated successfully" });
    } catch (err) {
      console.error("Error updating profile:", err);
      res.status(500).json({ message: "Error updating profile" });
    }
  });

app.post("/logout", (req, res) => {
    res.json({message: "Logged out successfully."});
});

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
})