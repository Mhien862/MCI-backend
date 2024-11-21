import express from 'express';
import dotenv from 'dotenv';
import sequelize from './db/connect.js'; // Kết nối cơ sở dữ liệu
import customerRoutes from './customer/customer.routes.js'; // Router cho khách hàng
import productRoutes from './product/product.routes.js'; // Router cho sản phẩm
import { adminJs, adminRouter } from './admin/admin.js'; // AdminJS

// Load biến môi trường từ file .env
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware để xử lý JSON
app.use(express.json());

// Routes cho API
app.use('/customers', customerRoutes);
app.use('/products', productRoutes);

// AdminJS (Giao diện quản trị)
app.use(adminJs.options.rootPath, adminRouter);

// Kết nối và đồng bộ cơ sở dữ liệu
sequelize
  .sync({ alter: true }) // Đồng bộ schema database
  .then(() => console.log('Database schema synchronized!'))
  .catch((err) => console.error('Error synchronizing database schema:', err));

// Khởi động server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
