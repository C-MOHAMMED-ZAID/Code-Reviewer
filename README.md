# 🚀 Code Reviewer – AI-Powered Code Feedback Tool

Code Reviewer is a full-stack MERN application that empowers developers to submit their code and receive AI-generated feedback instantly. Built with MongoDB, Express.js, React, and Node.js, the platform harnesses the power of artificial intelligence to analyze code for best practices, logic errors, optimization, and readability. It bridges the gap between solo coding and expert review by providing automated, intelligent, and context-aware suggestions.

> “Code is poetry — this app helps you refine your lines.”

---

## 🧩 Features

- 🔐 User Authentication & JWT-based Authorization
- 🧠 AI Review Engine for JavaScript & Python code
- 📤 Real-Time Code Submission and Feedback
- 📜 History Dashboard to track previous reviews
- 🧑‍💻 Role-based Access Control (User/Admin)
- 🌐 RESTful API Architecture
- 📦 MongoDB Integration for storing users and code logs
- 🎯 Responsive Frontend with React and Tailwind CSS/Bootstrap

---

## 🏗️ Tech Stack

| Layer      | Technology                     |
|------------|--------------------------------|
| Frontend   | React.js, Axios, Tailwind CSS  |
| Backend    | Node.js, Express.js            |
| Database   | MongoDB, Mongoose              |
| Auth       | JWT, bcryptjs                  |
| AI Engine  | OpenAI API                     |
| Dev Tools  | Nodemon, VS Code, GitHub       |

---

## 📂 Project Structure

```
code-reviewer/
│
├── client/              # React Frontend
│   ├── src/
│   │   ├── components/  # Reusable Components
│   │   ├── pages/       # Route Pages
│   │   ├── App.js       # Routes & Layout
│   │   └── index.js     # Entry Point
│   └── package.json
│
├── server/              # Node.js Backend
│   ├── controllers/     # Business Logic
│   ├── models/          # Mongoose Schemas
│   ├── routes/          # API Routes
│   ├── middleware/      # Auth Middleware
│   ├── config/          # DB Connection
│   ├── index.js         # Main Server Entry
│   └── package.json
│
├── README.md
└── .env                 # Environment Variables
```

---

## ⚙️ Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/C-MOHAMMED-ZAID/Code-Reviewer.git
cd code-reviewer
```

### 2. Backend Setup

```bash
cd server
npm install
touch .env
```

**Add the following to `.env`:**

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
OPENAI_API_KEY=your_openai_api_key
```

**Run backend:**

```bash
npm run dev
```

### 3. Frontend Setup

```bash
cd ../client
npm install
npm start
```

React app runs on `http://localhost:3000` and backend on `http://localhost:5000`

---

## 🧪 API Endpoints

### Auth Routes

- `POST /api/auth/register` – Register a new user
- `POST /api/auth/login` – Authenticate user

### Code Routes

- `POST /api/code/submit` – Submit code for AI review
- `GET /api/code/history` – Retrieve previous code reviews

---

## 🌱 Future Roadmap

- ✅ Support for multiple languages (Java, C++, etc.)
- ✅ AI auto-correction and suggested improvements
- ✅ Plagiarism detection tool
- ✅ Admin dashboard with user/code analytics
- ✅ Code similarity scoring
- ✅ Email feedback delivery system

---

## 🧑‍💼 Author

**Mohammed Zaid C**  
Full-Stack Developer | MERN | Python | SQL  
📩 [LinkedIn](https://www.linkedin.com/in/mohammedzaidc)  
💻 [GitHub](https://github.com/mohammedzaidc)

---

## 📄 License

This project is licensed under the [MIT License](LICENSE). Feel free to fork, contribute, and make it your own.

---

## 🙏 Acknowledgements

- OpenAI for powering the review engine
- Community resources and blogs for guidance
- GitHub Copilot and ChatGPT for code suggestions
- Fellow developers who inspired design & UX patterns
