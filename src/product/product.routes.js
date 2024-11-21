import express from 'express';
import { getAllProducts, createProduct } from './product.controller.js';

const router = express.Router();

router.get('/', getAllProducts); // Lấy danh sách sản phẩm
router.post('/', createProduct); // Tạo sản phẩm mới

export default router;
