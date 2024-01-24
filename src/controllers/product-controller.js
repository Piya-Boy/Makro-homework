exports.getProductsLanding = (req, res, next) => {
    res.json({ message: "Get Products Landing Page" });
};

exports.getProducts = (req, res, next) => {
    res.json({ message: "Get Filtered Products" });
};

exports.getProductByID = (req, res, next) => {
    res.json({ message: "Get Product By ID" });
}