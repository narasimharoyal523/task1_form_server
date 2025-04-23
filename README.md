# 🧾 Task 1: HTML Structure and Basic Server Interaction

**Level:** Beginner  
**Objective:** Build a simple form with HTML and handle form submissions using a Node.js Express server. Use EJS for server-side rendering.

---

## 🛠 Technologies Used
- Node.js
- Express.js
- EJS (Embedded JavaScript templates)
- Body-parser

---

## 📂 Project Structure

task1_form_server/ ├── views/ │ └── form.ejs ├── server.js ├── package.json

yaml
Copy
Edit

---

## ⚙️ Features

- Basic form (Name, Email)
- Express server setup
- Form data submission using `POST`
- Server-side rendering with EJS
- Output rendered dynamically using submitted data

---

## 📋 Setup Instructions

1. Clone or navigate to the folder:
   ```bash
   cd task1_form_server
Install dependencies:

bash
Copy
Edit
npm install
Start the server:

bash
Copy
Edit
node server.js
Open in browser:

arduino
Copy
Edit
http://localhost:3000
🌐 Usage
Fill in your Name and Email.

Click Submit.

The server will respond with a dynamically generated confirmation showing the input.

💡 Example
Form URL: http://localhost:3000

Submit:

bash
Copy
Edit
Name: Royal
Email: narasimha@example.com
Output:

graphql
Copy
Edit
Received: Royal, narasimha@example.com
