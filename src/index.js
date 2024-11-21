import express from 'express';
import dotenv from 'dotenv';
import sequelize from './db/connect.js';
import { adminJs, adminRouter } from './admin/admin.js';
import customerRoutes from './customer/customer.routes.js';
import productRoutes from './product/product.routes.js';
import { login } from './auth/auth.controller.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.post('/login', login);

// AdminJS
app.use(adminJs.options.rootPath, adminRouter);

// API routes
app.use('/customers', customerRoutes);
app.use('/products', productRoutes);

// Sync database and start server
sequelize
  .sync()
  .then(() => {
    console.log('Database connected and synced');
    app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}/admin`));
  })
  .catch((err) => console.error('Error connecting database:', err));
