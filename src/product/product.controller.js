import Product from './product.model.js';

// Lấy danh sách tất cả sản phẩm
export const getAllProducts = async (req, res) => {
  const products = await Product.findAll();
  res.json(products);
};

// Tạo sản phẩm mới
export const createProduct = async (req, res) => {
  const { name, price, category, status } = req.body;
  try {
    const newProduct = await Product.create({ name, price, category, status });
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
