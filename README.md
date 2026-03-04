
📘 E-Learning Platform

A simple and secure web-based E-Learning Platform built using HTML, CSS, and JavaScript.
This project allows students to log in, access courses, track progress, and download a certificate after completing lessons.

🚀 Features

🔐 Secure Login System

📚 Multiple Courses Available

🎥 Embedded YouTube Course Videos

📊 Lesson Progress Tracking

🔒 Course Access Restricted Without Login

🎓 Certificate Generation (PDF Download)

📈 Dashboard Progress Bar

🔓 Certificate Unlock Only After:

Watching course video (demo timer)

Completing all lessons (100%)

🛠 Technologies Used

HTML5

CSS3

JavaScript (Vanilla JS)

LocalStorage (for session management)

html2canvas (for certificate capture)

jsPDF (for PDF generation)

📂 Project Structure
E-Learning-Platform/
│
├── login.html
├── dashboard.html
├── course.html
├── certificate.html
│
├── css/
│   └── style.css
│
├── js/
│   └── script.js
│
└── README.md
🔑 How It Works
1️⃣ Login System

User enters username and password.

Username is stored in localStorage.

Without login, dashboard and courses cannot be accessed.

2️⃣ Dashboard

Displays all available courses.

User can select any course.

Shows overall progress.

3️⃣ Course Page

Loads selected course video.

Lessons remain locked until video timer completes.

Progress bar updates when lessons are checked.

Certificate unlocks only after:

Video watched (demo timer)

100% lesson completion

4️⃣ Certificate

Displays:

Student Name

Course Name

Date of Completion

Generates downloadable PDF certificate.

🔒 Security Implementation

Pages protected using checkLogin() function.

Direct URL access to:

dashboard.html

course.html

certificate.html
is blocked without login.

Certificate generation restricted until course completion.

▶ How to Run the Project
⚠ Recommended: Use Live Server

Open project folder in VS Code.

Install Live Server extension.

Right click login.html

Click Open with Live Server

Your URL should look like:

http://127.0.0.1:5500/login.html

Avoid using:

file:///C:/...

Because external libraries may not load properly.

📌 Sample Courses Included

HTML Mastery

CSS Advanced

Python Basics

JavaScript Pro

React JS Fundamentals

MySQL Database Basics

Android App Development

Machine Learning Basics

Full Stack Web Development

🎯 Future Improvements

Real YouTube watch percentage tracking

Backend authentication system

Database integration

Admin panel for course management

Multiple certificate designs

Dark / Light theme toggle

Quiz integration
