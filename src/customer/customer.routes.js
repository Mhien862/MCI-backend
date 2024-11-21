import express from 'express';
import { getAllCustomers, createCustomer } from './customer.controller.js';

const router = express.Router();

router.get('/', getAllCustomers); // Lấy danh sách khách hàng
router.post('/', createCustomer); // Tạo khách hàng mới

export default router;
