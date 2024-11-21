import AdminJS from 'adminjs';
import AdminJSExpress from '@adminjs/express';
import AdminJSSequelize from '@adminjs/sequelize';
import sequelize from '../db/connect.js';
import Customer from '../customer/customer.model.js';
import Product from '../product/product.model.js';

AdminJS.registerAdapter(AdminJSSequelize);

const adminJs = new AdminJS({
  databases: [sequelize],
  resources: [Customer, Product], // Thêm cả hai model vào AdminJS
  rootPath: '/admin',
});

const adminRouter = AdminJSExpress.buildRouter(adminJs);

export { adminJs, adminRouter };
