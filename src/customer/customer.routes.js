import express from 'express';
import { getAllCustomers, createCustomer } from './customer.controller.js';
import { authenticateToken, authorizeRoles } from '../middleware/auth.js';

const router = express.Router();

router.get('/', authenticateToken, authorizeRoles('admin', 'user'), getAllCustomers);
router.post('/', authenticateToken, authorizeRoles('admin'), createCustomer);


export default router;
