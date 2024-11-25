const unauthorized = (error, req, res, next) => {
    if (error && error.status === 401) {
        console.error("Unauthorized error:", error.message); 
        return res.status(401).json({
            success: false,
            message: error.message || "Unauthorized access",
        });
    }
    next(error);
};


export default unauthorized;