import Customer from './customer.model.js';


export const getAllCustomers = async (req, res) => {
  const customers = await Customer.findAll();
  res.json(customers);
};


export const createCustomer = async (req, res) => {
    const { name, email, phone, status } = req.body;
  
    try {
      const newCustomer = await Customer.create({ name, email, phone, status });
      res.status(201).json(newCustomer);
    } catch (error) {
      if (error.name === 'SequelizeUniqueConstraintError') {
        res.status(400).json({ error: 'Emails are duplicated' });
      } else {
        res.status(500).json({ error: 'Internal Server Error' });
      }
    }
  };
  
