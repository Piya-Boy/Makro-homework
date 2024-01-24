exports.register = (req, res, next) => {
    const { username, password } = req.body
    res.json({ username, password });
};

exports.login = (req, res, next) => {
    const { username, password } = req.body
    res.json({ username, password });
};

exports.forgetPassword = (req, res, next) => {
    const { username } = req.body
    res.json({ username })
};


exports.verifyForgetPassword = (req, res, next) => {
    const { token } = req.params
    res.json({ token });
};

exports.resetPassword = (req, res, next) => {
    const { token } = req.params
    const { password } = req.body
    res.json({ token, password });
};