import express from 'express';
import { authenticateToken, authorizeRoles } from '../middleware/auth.js';
import { getAllProducts, createProduct } from './product.controller.js';

const router = express.Router();


router.get('/', authenticateToken, authorizeRoles('admin', 'user'), getAllProducts);
router.post('/', authenticateToken, authorizeRoles('admin'), createProduct);


export default router;
