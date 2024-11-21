import Product from './product.model.js';


export const getAllProducts = async (req, res) => {
  const products = await Product.findAll();
  res.json(products);
};


export const createProduct = async (req, res) => {
    const { name, price, category, status } = req.body;
  
    try {
      const newProduct = await Product.create({ name, price, category, status });
      res.status(201).json(newProduct);
    } catch (error) {
      if (error.name === 'SequelizeValidationError') {
        const errors = error.errors.map((err) => err.message); 
        res.status(400).json({ error: 'Validation error', details: errors });
      } else {
        res.status(500).json({ error: 'Internal Server Error', details: error.message });
      }
    }
  };
  