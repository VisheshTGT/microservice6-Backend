# 🧑‍💼 Admin Dashboard – Backend Service

This backend microservice powers the internal Admin Panel. It allows your internal team to manage users, clients, transactions, logs, and view real-time analytics.

## 🚀 Features

- ✅ Secure admin login using JWT  
- ✅ Manage users and business clients  
- ✅ View dashboard analytics and charts  
- ✅ Track receipt activity and transaction logs  
- ✅ Monitor API/system errors  
- ✅ Built using Node.js, Express, MongoDB

## 🛠 Tech Stack

- **Backend**: Node.js + Express  
- **Database**: MongoDB + Mongoose  
- **Auth**: JWT + bcryptjs  
- **Logging**: Custom ErrorLog schema  
- **Frontend**: [Next.js Admin Panel](https://github.com/Aashish-TGT/ms6-admin-frontend)

## 📦 Project Structure

admin-dashboard-backend/  
├── src/  
│   ├── controllers/      # Auth, Admin, Dashboard logic  
│   ├── models/           # User, Client, Transaction, ErrorLog schemas  
│   ├── routes/           # /api/auth, /api/admin routes  
│   ├── middleware/       # Auth protection and error handling  
│   ├── app.js            # Express app setup  
│   └── server.js         # Entry point  
├── .env                  # Environment variables  
├── package.json  
└── README.md

## 🔐 API Endpoints

### Auth Routes (`/api/auth`)

- `POST /login` – Admin login  
- `POST /register` – Register new user (for testing only)

### Admin Routes (`/api/admin`)

> Requires Bearer token in `Authorization` header.

- `GET /dashboard` – Get summary stats & charts  
- `GET /users` – List all users  
- `GET /users/:id` – Get single user  
- `PUT /users/:id` – Update user  
- `DELETE /users/:id` – Delete user

## 📊 Dashboard Metrics

- ✅ Total Users  
- 🧑‍💼 Total Clients  
- 🧾 Total Receipts  
- ❌ Total Errors  
- 📈 Chart of Receipt Statuses  
- 🕒 Recent Transactions  
- ⚠️ Recent Errors

## ⚙️ Installation

git clone https://github.com/YourUsername/admin-dashboard-backend  
cd admin-dashboard-backend  
npm install

### Create a `.env` file:

PORT=5000  
MONGO_URI=mongodb://localhost:27017/admin_dashboard  
JWT_SECRET=your_secret_key  
JWT_EXPIRES_IN=1d

### Run the server:

npm run dev

## 🔗 Connect to Frontend

1. Clone the frontend:  
   https://github.com/Aashish-TGT/ms6-admin-frontend

2. In the frontend’s `.env.local` file:

NEXT_PUBLIC_API_BASE_URL=http://localhost:5000/api

3. Use the JWT token from login in the `Authorization` header for admin routes.

## 🧪 Testing

Use Postman or Thunder Client:

- `POST /api/auth/login` – Login  
- `GET /api/admin/dashboard` – Dashboard data  
- `GET /api/admin/users` – User list  

Header format:  
Authorization: Bearer `<your_token>`

## 👩‍💻 Future Improvements

- Pagination & filtering  
- Log severity filters  
- RBAC (Role-based access control)  
- Email alerts for failed receipts/errors

## 📄 License

MIT License – Free to use, modify, and distribute.

## 🤝 Maintainers

Built with ❤️ by the TGT team and open contributors.
