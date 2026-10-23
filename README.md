# LearnHub – Online Course Selling Website

## About the Project
LearnHub is a web-based online course selling platform developed to help users explore courses, register or log in, and access their learning dashboard. The project uses React for the frontend and Node.js with Express.js for the backend.

## Features
- User registration and login
- Browse available courses
- View course details
- Course enrollment
- User dashboard
- Admin-related functionality
- REST API backend
- MongoDB database integration

## Technologies Used

**Frontend**
- React.js
- Vite
- HTML
- CSS
- JavaScript
- Axios
- React Router

**Backend**
- Node.js
- Express.js
- MongoDB
- Mongoose
- JSON Web Token (JWT)
- bcryptjs

## Project Structure

```text
online-course-selling-website/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── package.json
├── .gitignore
└── README.md
```

## Prerequisites
- Node.js and npm
- MongoDB
- Git

## How to Run the Project

### 1. Clone the Repository

```bash
git clone https://github.com/Nidhikgowda/LearnHub.git
cd LearnHub
```

### 2. Run the Backend

```bash
cd backend
npm install
npm run dev
```

Configure the required environment variables in a `.env` file before starting the backend. Use your local MongoDB connection and the port configured in your project.

### 3. Run the Frontend

Open a new terminal from the project root and run:

```bash
cd frontend
npm install
npm run dev
```

Open the local URL shown in the terminal to view the website.

## Learning Outcomes
- Understanding frontend and backend development
- Connecting a React application with a REST API
- Working with MongoDB
- Understanding user authentication
- Organizing a full-stack web application

## Future Enhancements
- Online payment integration
- Video-based course learning
- Course search and filtering
- Improved user interface
- Course progress tracking

## Author
**Nithya Shree K**

## License
This project was developed for educational purposes.
