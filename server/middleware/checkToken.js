import jwt from 'jsonwebtoken';

const checkToken = async (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1] || req.cookies.token;

    if (!token) {
        return res.status(403).json({ message: "No token provided" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const userId = decoded.id
        req.user = userId;
        next(); 
    } catch (error) {
        console.log(error);
        return res.status(401).json({ message: "Invalid or expired token" });
    }
};

export default checkToken;
