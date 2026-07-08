# VASISTA SkillHub - Web Application with MySQL Database

An interactive, responsive skill training and enrollment dashboard designed for schools, colleges, graduates, and innovators. Features real-time course registration tracking status, payment verification loops, dynamic user profile modification (with Base64 profile photo uploads), and a Node.js Express server backend connected to a MySQL database.

## Project Architecture

The application is built using a modern full-stack architecture:
*   **Frontend**: React (Single Page Application) with custom styled Vanilla CSS.
*   **Backend**: Node.js & Express server exposing REST APIs for authentication, profiles, and category tracking.
*   **Database**: MySQL database (`skillhub_db`) to store user records and category status logs.

---

## Prerequisites

Before starting, ensure you have the following installed on your machine:
*   [Node.js](https://nodejs.org/) (v16 or higher)
*   [MySQL Server](https://dev.mysql.com/downloads/installer/) (v8 or higher)
*   [npm](https://www.npmjs.com/) (bundled with Node.js)

---

## Database Setup

1.  Start your MySQL server.
2.  Log in to your MySQL terminal or GUI manager (such as MySQL Workbench or phpMyAdmin).
3.  Import/Execute the database schema file located in the project root:
    ```bash
    mysql -u root -p < schema.sql
    ```
    This script will:
    *   Create a database named `skillhub_db`.
    *   Create the `users` table to handle login credentials and profile images.
    *   Create the `tracking_status` table to store real-time tracking progress for each course/workshop category.

---

## Installation & Setup

1.  **Clone / Download the project repository** to your local machine.
2.  Open your terminal inside the project directory (`c:\Users\tekuv\skillhub`).
3.  **Install dependencies** for both React and Express server layers:
    ```bash
    npm install
    ```
4.  **Create a `.env` file** in the root of the project to customize database parameters (optional, default fallbacks will be used if not specified):
    ```env
    PORT=5000
    DB_HOST=localhost
    DB_USER=root
    DB_PASSWORD=your_mysql_password
    DB_NAME=skillhub_db
    DB_PORT=3306
    ```

---

## Running the Application

To run the full stack, you must start the backend database API server and the React frontend development server simultaneously.

### 1. Start the Backend Express Server
In your terminal, launch the server file:
```bash
node server.js
```
You should see:
```text
Connected to MySQL database skillhub_db.
Server is running on port 5000
```

### 2. Start the Frontend React Application
Open a second terminal window in the same project root folder and start the React dev server:
```bash
npm start
```
The application will automatically load in your browser at `http://localhost:3000`.

---

## Core Features & Workflows

### 1. User Registration & Sign In
*   **Register Page**: Enter name, phone, email, and password. This submits a record to the `users` table and creates an initialized row in the `tracking_status` table.
*   **Login Page**: Authenticate securely using MySQL verification.

### 2. Profile Customization
*   Go to the **Profile** section to inspect and modify your name, phone number, and password.
*   **Profile Image Upload**: Select a profile photo. The frontend reads the image file using `FileReader`, converts it into a Base64-encoded Data URL, and saves it directly to the database. Click **Save Changes** to commit.

### 3. Application Tracking Status Timelines
*   **BSW26 Page**: Tracks your 4-step Business Startup Workshop journey.
*   **NICT Page**: Tracks your 5-stage student/graduate technology curriculum progress.
*   **Automated Stage Progression**: When registration is submitted and payment is completed, the background timers dynamically transition statuses every 5 seconds (verifying transaction -> credential email dispatch -> active class batched -> certificate issued).
#

## Login Page
<img width="1917" height="872" alt="image" src="https://github.com/user-attachments/assets/08c75b5b-a6d2-478c-9301-0707f1127259" />

## Sign in Page
<img width="1917" height="843" alt="image" src="https://github.com/user-attachments/assets/eb35c3aa-1a91-429b-8354-fe9d0fd6ada2" />

## home 
<img width="1890" height="851" alt="image" src="https://github.com/user-attachments/assets/48c8afe1-2d51-4d61-8359-a9c02e395bcc" />

## NICT page
<img width="1896" height="861" alt="image" src="https://github.com/user-attachments/assets/a64a4024-2415-487e-ba39-1b82a0854bc4" />

## Live Application tracking
<img width="1887" height="871" alt="image" src="https://github.com/user-attachments/assets/416a5d84-4746-4687-abb9-85ca8777eb6a" />

## application form
<img width="1885" height="850" alt="image" src="https://github.com/user-attachments/assets/bf1c98ad-e586-4817-ad23-a3d2160665a2" />

## payment page
<img width="1917" height="868" alt="image" src="https://github.com/user-attachments/assets/830c6b1a-8265-4ab0-95a4-2d90d992362b" />

## profile page
<img width="1917" height="872" alt="image" src="https://github.com/user-attachments/assets/73bca254-91c7-41fd-a49b-4fe4aed688df" />

## logout page
<img width="1917" height="867" alt="image" src="https://github.com/user-attachments/assets/ee54feee-7172-45ef-92b4-437821193f16" />




