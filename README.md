## How to Run the Project

### Prerequisites
- Node.js and npm installed
- MongoDB installed and running
- Git installed

### 1. Clone the Repository

```bash
git clone https://github.com/Nidhikgowda/LearnHub.git
cd LearnHub
```

### 2. Run the Backend

Open a terminal in the project folder and run:

```bash
cd backend
npm install
npm run dev
```

Before starting the backend, configure the required environment variables in the `backend/.env` file.

Make sure MongoDB is running.

### 3. Run the Frontend

Open a **new terminal** in the project root and run:

```bash
cd frontend
npm install
npm run dev
```

Open the local URL displayed in the terminal to use the website.

### Windows PowerShell Note

If PowerShell shows an error saying that running scripts is disabled, use `npm.cmd` instead of `npm`.

For example:

```powershell
npm.cmd install
npm.cmd run dev
```

### Troubleshooting

- **npm command error:** Try `npm.cmd` in PowerShell.
- **MongoDB connection error:** Check that MongoDB is running and the database connection settings are correct.
- **Port already in use:** Check whether another application is using the required port.
- **Module not found:** Run `npm.cmd install` in the correct folder.
