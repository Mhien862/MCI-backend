import Customer from './customer.model.js';

// Lấy danh sách tất cả khách hàng
export const getAllCustomers = async (req, res) => {
  const customers = await Customer.findAll();
  res.json(customers);
};

// Tạo khách hàng mới
export const createCustomer = async (req, res) => {
    const { name, email, phone, status } = req.body;
  
    try {
      const newCustomer = await Customer.create({
        name,
        email,
        phone,
        status,
      });
      res.status(201).json(newCustomer);
    } catch (error) {
      console.error('Error creating customer:', error.message);
      res.status(400).json({ error: error.message });
    }
  };
