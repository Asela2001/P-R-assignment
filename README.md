Student Management System

This application allows users to perform CRUD operations (Create, Read, Update, Delete) on student records, including fields for name, email,stream, course, and grade. The frontend is built with React using functional components, hooks, and Tailwind CSS for styling. The backend is built with Node.js, Express, and Mongoose, with MongoDB as the database. Axios is used for API calls, and basic validation and error handling are implemented.

How to run locally
Backend

cd backend
npm install

create .env file in root and add
MONGO_URI=mongodb:your connection string

npm run dev

frontend

cd frontend/student-management
npm install
npm run dev