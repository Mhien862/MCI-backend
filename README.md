# CRM Backend System

A simple Customer Relationship Management (CRM) backend system for managing customers and products, with an admin interface using AdminJS.

## 1. System Requirements

- **Runtime**: Node.js v16 or newer
- **Database**: PostgreSQL v12 or newer

## 2. Application Installation

### Prerequisites
- Ensure Node.js and PostgreSQL are installed on your system
- Git installed for cloning the repository

### Installation Steps

1. **Clone the Project**
   ```bash
   git clone https://github.com/Mhien862/MCI-backend.git
   cd MCI-backend
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Configure Environment**
   Create a `.env` file in the project root with the following configuration:
   ```
   DB_HOST=<your-database-host>
   DB_PORT=6543
   DB_NAME=<your-database-name>
   DB_USER=<your-database-username>
   DB_PASSWORD=<your-database-password>
   
   ```

4. **Database Synchronization**
   ```bash
   node src/index.js
   ```

5. **Run the Application**
   - **Production**:
     ```bash
     npm start
     ```
   - **Development**:
     ```bash
     npm run dev
     ```

## 3. AdminJS Interface

- Access the admin interface at: `http://localhost:3000/admin`
- Manage customers and products through the intuitive web interface

## 4. API Endpoints

### Customers API

#### Get Customer List
- **URL:** `GET /customers`
- **Response Example:**
  ```json
  [
    {
    "id": 1,
    "name": "minhhien",
    "email": "mh@gmail.com",
    "phone": "086898789",
    "status": "active",
    "createdAt": "2024-11-25T17:00:00.000Z",
    "updatedAt": "2024-11-21T15:59:14.781Z"
  }
  ]
  ```

#### Create New Customer
- **URL:** `POST /customers`
- **Request Body:**
  ```json
  {
    "name": "Tan Dung",
    "email": "td@gmail.com",
    "phone": "012345678",
    "status": "active"
  }
  ```
- **Response Example:**
  ```json
  {
    "id": 2,
    "name": "Tan Dung",
    "email": "td@gmail.com",
    "phone": "012345678",
    "status": "active",
    "createdAt": "2024-11-21T12:10:00Z",
    "updatedAt": "2024-11-21T12:10:00Z"
  }
  ```

### Products API

#### Get Product List
- **URL:** `GET /products`
- **Response Example:**
  ```json
  [
   {
    "id": 1,
    "name": "xe dap",
    "price": 1000,
    "category": "car",
    "status": "available",
    "createdAt": "2024-11-28T17:00:00.000Z",
    "updatedAt": "2024-11-21T15:15:57.039Z"
  },
  ]
  ```

#### Create New Product
- **URL:** `POST /products`
- **Request Body:**
  ```json
  {
    "name": "Iphone 15 promax",
    "price": 500.0,
    "category": "mobile",
    "status": "available"
  }
  ```
- **Response Example:**
  ```json
  {
    "id": 2,
    "name": "Iphone 15 promax",
    "price": 500.0,
    "category": "mobile",
    "status": "available",
    "createdAt": "2024-11-21T12:15:00Z",
    "updatedAt": "2024-11-21T12:15:00Z"
  }
  ```

## 5. Error Handling

### Validation Errors

#### Invalid Data
- **Example:** Negative value in `price` field
- **Response:**
  ```json
  {
    "error": "Validation error",
    "details": ["Validation min on price failed"]
  }
  ```

#### Duplicate Email
- **Response:**
  ```json
  {
    "error": "Validation error",
    "details": ["Emails are duplicated"]
  }
  ```

## 6. Sample Data Models

### Customer Model
```json
{
  "name": "Tan Dung",
  "email": "td@gmail.com",
  "phone": "012345678",
  "status": "active"
}
```

### Product Model
```json
{
  "name": "Iphone 15 promax",
  "price": 1000.0,
  "category": "mobile",
  "status": "available"
}
```

## 7. Contributing

- Fork the repository
- Create your feature branch (`git checkout -b feature/AmazingFeature`)
- Commit your changes (`git commit -m 'Add some AmazingFeature'`)
- Push to the branch (`git push origin feature/AmazingFeature`)
- Open a Pull Request

## 8. License

Specify your project's license here (e.g., MIT, Apache 2.0)