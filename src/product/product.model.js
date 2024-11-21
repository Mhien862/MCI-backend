import { DataTypes } from 'sequelize';
import sequelize from '../db/connect.js';

const Product = sequelize.define('Product', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false, // Tên không được để trống
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false, // Giá không được để trống
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false, // Danh mục sản phẩm không được để trống
  },
  status: {
    type: DataTypes.ENUM('available', 'unavailable'), // Chỉ chấp nhận 'available' hoặc 'unavailable'
    defaultValue: 'available', // Mặc định là 'available'
  },
  createdAt: {
    type: DataTypes.DATE, // Ngày tạo
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
  updatedAt: {
    type: DataTypes.DATE, // Ngày cập nhật
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
});

export default Product;
