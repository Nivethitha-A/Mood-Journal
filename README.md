# 📝 Mood Journal

A full-stack Mood Journal web application that enables users to securely record, manage, and track their daily thoughts and emotions. The application provides user authentication, journal management, and a responsive interface for a seamless journaling experience.

---

## 🚀 Features

* 🔐 User Registration and Login
* 🔒 Secure Authentication
* 📝 Create Journal Entries
* ✏️ Edit Existing Entries
* ❌ Delete Journal Entries
* 📋 Dashboard to View All Entries
* 👤 User Profile Management
* 📱 Responsive User Interface
* 🎨 Smooth UI Animations

---

## 🛠️ Tech Stack

### Frontend

* React.js
* React Router
* CSS3

### Backend

* Node.js
* Express.js

### Database

* MongoDB

### Authentication

* JSON Web Token (JWT)

---

## 📂 Project Structure

```text
Mood-Journal/
│
├── Frontend
│   ├── App.js
│   ├── Dashboard.jsx
│   ├── Login.jsx
│   ├── Register.jsx
│   ├── AddEntry.jsx
│   ├── EditEntry.jsx
│   ├── Profile.jsx
│   ├── index.js
│   ├── App.css
│   └── animations.css
│
├── Backend
│   ├── server.js
│   ├── db.js
│   ├── auth.js
│   ├── authController.js
│   ├── authMiddleware.js
│   ├── journalController.js
│   ├── journalRoutes.js
│   ├── userRoutes.js
│   ├── Journal.js
│   ├── JournalEntry.js
│   └── User.js
│
└── README.md
```

---

## ⚙️ Installation

### Clone the Repository

```bash
git clone https://github.com/Nivethitha-A/Mood-Journal.git
```

### Navigate to the Project

```bash
cd Mood-Journal
```

### Install Dependencies

```bash
npm install
```

### Configure Environment Variables

Create a `.env` file in the project root and add the required environment variables.

Example:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000
```

### Start the Backend

```bash
node server.js
```

### Start the Frontend

```bash
npm start
```

The application will be available at:

```
http://localhost:3000
```

---

## 📸 Screenshots

Add screenshots of the following pages:

* Login
* Register
* Dashboard
* Add Journal Entry
* Edit Journal Entry
* Profile

---

## 📌 Future Enhancements

* Mood analytics and charts
* Calendar view
* Search journal entries
* Filter by mood or date
* Dark mode
* Image attachments
* Password reset
* Email verification
* Export journal entries as PDF

---

## 📚 Learning Outcomes

This project helped strengthen my understanding of:

* Full-stack web development
* REST API development
* JWT authentication
* CRUD operations
* MongoDB integration
* React component architecture
* Protected routes
* State management
* Backend routing and middleware

---

## 👩‍💻 Author

**Nivethitha A**

GitHub: https://github.com/Nivethitha-A

---

## 📄 License

This project is created for educational and portfolio purposes.
