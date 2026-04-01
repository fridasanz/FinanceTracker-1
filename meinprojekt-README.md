# FinanceTrack

A personal finance web app for young adults to manage their finances easily and independently.

## Features

- Track and categorize income and expenses
- Set budgets per category
- Manage payment deadlines and recurring expenses
- Automatic subscription detection
- Manage recurring payments and subscriptions
- Monthly expense comparison
- Monthly reports and visualizations
- Define and manage shared budgets
- Notifications for upcoming payments and shared budgets

## Tech Stack

- Frontend: React 18 + Vite (port 5173)
- Backend: Express.js (port 3000)

## Project Structure

```
meinprojekt/
├── README.md
├── frontend/
│   ├── package.json
│   ├── vite.config.js
│   ├── postcss.config.cjs
│   ├── index.html
│   └── src/
│       ├── main.jsx
│       ├── App.jsx
│       ├── components/
│       │   └── Layout/
│       │       ├── MainLayout.jsx
│       │       ├── Sidebar.jsx
│       │       └── Header.jsx
│       └── pages/
│           ├── Dashboard.jsx
│           ├── Transactions.jsx
│           ├── Budgets.jsx
│           ├── Subscriptions.jsx
│           └── Reports.jsx
└── backend/
    ├── package.json
    ├── server.js
    └── routes/
        ├── transactions.js
        ├── budgets.js
        └── subscriptions.js
```

## Getting Started

### Frontend

1. Navigate to the frontend directory: `cd frontend`
2. Install dependencies: `npm install`
3. Start the development server: `npm run dev`

### Backend

1. Navigate to the backend directory: `cd backend`
2. Install dependencies: `npm install`
3. Start the server: `npm start`

The frontend will run on http://localhost:5173 and the backend on http://localhost:3000.