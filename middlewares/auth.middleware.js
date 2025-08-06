const jwt = require("jsonwebtoken");

const CheckAuth = (req, res, next) => {
    const token = req.cookies?.Access_Token;
    if (!token) {
        return res.status(400).json({ message: "Token not found" });
    }
    
    try {
    const decoded = jwt.verify(token, "rishi")
    if (!decoded) {
        return res.status(400).json({ message: "Invalid token" });
    }
    req.user= decoded.userData;
    next();    
    } catch (error) {
        return res.status(400).json({ message: "Error verifying token", error: error.message });
    }
    
}

module.exports = CheckAuth;