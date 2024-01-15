# Inventory Management System - Backend

## 📦 Full Stack Inventory Management System - Backend

Welcome to the backend repository of the Full Stack Inventory Management System. This backend is developed to support the functionality of the inventory management system's frontend, providing a robust server-side application for efficient handling of inventory-related operations.

## 🛠️ Technologies Used

- **TypeScript**: A statically typed superset of JavaScript.
- **Node.js**: A JavaScript runtime for building server-side applications.
- **Express**: A fast and minimalist web framework for Node.js.
- **Prisma**: A database toolkit for TypeScript and Node.js.
- **PostgreSQL**: A powerful, open-source relational database system.
- **Yup**: A validation library for validating data in requests.

## 🏃 How to Run the Backend

To get the backend up and running, follow these steps:

1. Clone this repository.
2. Navigate to the project directory in your terminal.
3. Run `npm install` in the backend directory to install the backend dependencies.
4. Configure the following environment variables in a `.env` file in the backend directory:
    - `DATABASE_URL`: PostgreSQL database connection URL.
    - `PORT`: Port where the backend server will run (by default, use 3333).
5. Run `npx prisma migrate dev` to apply database migrations.
6. Run `npm run dev` in the backend directory to start the backend development server.

Now, the backend server is up and running, ready to handle requests from the frontend.

## 🤝 Contribution

Contributions to the backend are welcome! Feel free to open issues and send pull requests. Your input helps make this inventory management system more robust and efficient.

Developed with ❤️ by Diogo
