const users = require("../_mock_users/usersList");

const userExist = (user, pass) => {
    const result = users.some(({ username, password }) =>
        username.includes(user) && password.includes(pass)
    )
    return result;
}

const userLoginController = async (req, res) => {

    const {
        username,
        password
    } = req.body;

    try {
        if (userExist(username, password)) {
            return res.status(200).send('login successful!');
        } else {
            return res.status(400).send('login failed');
        }
    } catch (error) {
        console.log(error.message)
    }
}

module.exports = userLoginController;