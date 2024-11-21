import jwt from 'jsonwebtoken';

export const authenticateToken = (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) return res.status(401).json({ error: 'Access denied, token missing!' });
  
    try {
      const verified = jwt.verify(token, process.env.JWT_SECRET);
      req.user = verified; 
      next();
    } catch (error) {
      res.status(403).json({ error: 'Invalid token!' });
    }
  };

  export const authorizeRoles = (...roles) => {
    return (req, res, next) => {
      if (!roles.includes(req.user.role)) {
        return res.status(403).json({ error: 'Access denied!' });
      }
      next();
    };
  };
