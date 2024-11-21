import AdminJS from 'adminjs';
import AdminJSExpress from '@adminjs/express';
import AdminJSSequelize from '@adminjs/sequelize';
import { authenticateToken } from '../middleware/auth.js';
import sequelize from '../db/connect.js';
import Customer from '../customer/customer.model.js';
import Product from '../product/product.model.js';

AdminJS.registerAdapter(AdminJSSequelize);

const adminJs = new AdminJS({
  databases: [sequelize],
  rootPath: '/admin',
  resources: [
    { resource: Customer },
    { resource: Product },
  ],
  branding: {
    companyName: 'CRM Backend System',
    softwareBrothers: false,
  },
});


const adminRouter = AdminJSExpress.buildAuthenticatedRouter(adminJs, {
  authenticate: async (email, password) => {
    
    if (email === 'admin@gmail.com' && password === 'admin') {
      return { email: 'admin@gmail.com', role: 'admin' };
    }
    return null;
  },
  cookiePassword: process.env.COOKIE_SECRET || 'session_secret',
});

export { adminJs, adminRouter };
